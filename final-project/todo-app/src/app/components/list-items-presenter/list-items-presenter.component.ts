import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BehaviorSubject, filter, firstValueFrom, interval, map, Observable, Subject, switchAll, take, takeUntil} from "rxjs";
import {ItemStatus, TodoItem} from "../../models/todo-item.model";
import {StateService} from "../../services/state.service";
import {TodoList} from "../../models/todo-list.model";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {ValidatorsCreator} from "../../utilities/validators-creator";
import {APP_URLS} from "../../app-routing.module";

@Component({
  selector: 'app-list-items-presenter',
  templateUrl: './list-items-presenter.component.html',
  styleUrls: ['./list-items-presenter.component.css']
})
export class ListItemsPresenterComponent implements OnInit {

  todoItems$!: Observable<TodoItem[]>
  todoList$!: Observable<TodoList>;

  isAddingNewItem$ = new BehaviorSubject<boolean>(false);
  isDeletingCurrentList$ = new BehaviorSubject<boolean>(false);

  addNewTodoItemForm = new FormGroup({
    caption: new FormControl('', [Validators.required, ValidatorsCreator.minContentLengthValidator(10) ,ValidatorsCreator.minNumOfWordsValidator(3)])
  })

  statusChangerSignal$ = new Subject();

  constructor(private activatedRoute: ActivatedRoute,
              private stateService: StateService,
              private router: Router) { }

  ngOnInit(): void {
    this.todoList$ = this.activatedRoute.params.pipe(
      map(params => this.stateService.getListById(Number(params['id']))),
      switchAll(),
    );

    this.todoItems$ = this.activatedRoute.params.pipe(
      map(params => this.stateService.getItemsOfList(Number(params['id']))),
      switchAll()
    );
  }


  async updateTodoItemStatus(itemId: number) {
    await this.stateService.MarkAsCompleted(itemId);
  }

  getControlByFieldName(fieldName: string): FormControl<string> {
    return this.addNewTodoItemForm.get(fieldName)! as FormControl<string>;
  }

  async addNewTodoItem(caption: string) {

    const listId = (await firstValueFrom(this.todoList$)).id;

    await this.stateService.AddTodoItem(listId, caption);

    this.addNewTodoItemForm.reset();

    this.isAddingNewItem$.next(false);
  }

  async goToList(listId: number) {
    await this.router.navigate([`lists/${listId}/edit`])
  }

  async removeTodoList(listId: number) {
    await this.stateService.DeleteList(listId);
    await this.router.navigate([APP_URLS.home]);
  }

  async changeItemStatus(itemId: number, newStatus: ItemStatus) {
    if(newStatus === ItemStatus.pending) {
      await this.stateService.setItemStatus(itemId, newStatus);
      interval( 1000).pipe(
        filter(t => t === 5),
        take(1),
        map(async _ => await this.stateService.setItemStatus(itemId, ItemStatus.complete)),
        takeUntil(this.statusChangerSignal$)
      ).subscribe()
    } else if(newStatus === ItemStatus.complete) {
      await this.stateService.setItemStatus(itemId, newStatus);
      this.statusChangerSignal$.next('');
    }
  }
}
