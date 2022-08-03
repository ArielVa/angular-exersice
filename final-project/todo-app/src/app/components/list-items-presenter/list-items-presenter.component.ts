import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BehaviorSubject, firstValueFrom, map, Observable, switchAll} from "rxjs";
import {TodoItem} from "../../models/todo-item.model";
import {StateService} from "../../services/state.service";
import {TodoList} from "../../models/todo-list.model";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {ValidatorsCreator} from "../../utilities/validators-creator";
import {AppUrls} from "../../app-routing.module";

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

    this.isAddingNewItem$.next(false);
  }

  async goToList(listId: number) {
    await this.router.navigate([`lists/${listId}/edit`])
  }

  async removeTodoList(listId: number) {
    await this.stateService.DeleteList(listId);
    await this.router.navigate([AppUrls().lists]);
  }
}
