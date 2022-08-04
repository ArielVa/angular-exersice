import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, } from "@angular/router";
import {BehaviorSubject, firstValueFrom, map, Observable, switchAll, take} from "rxjs";
import {TodoList, TodoListIcons} from "../../models/todo-list.model";
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {StateService} from "../../services/state.service";
import {AppUrls} from "../../app-routing.module";
import {ValidatorsCreator} from "../../utilities/validators-creator";

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {

  colorOptions: string[] = [
    'red', 'green', 'blue', 'yellow', 'pink', 'purple', 'teal', 'azure'
  ];

  selectedColor$ = new BehaviorSubject(this.colorOptions[0]);

  icons = TodoListIcons();
  selectedIcon$ = new BehaviorSubject('');

  /*
  false = save, true = edit
  * */
  action$!: Observable<boolean>
  todoList$!: Observable<TodoList>

  todoListFrom = new FormGroup({
    caption: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required, ValidatorsCreator.minContentLengthValidator(30) ,ValidatorsCreator.minNumOfWordsValidator(10)]),
    icon: new FormControl('', [Validators.required]),
    color: new FormControl('', [Validators.required])
  })

  constructor(private routerStateSnapshot: ActivatedRoute,
              private stateService: StateService,
              private router: Router) { }

  async ngOnInit() {
    this.action$ = this.routerStateSnapshot.params.pipe(
      map(param => param['id'])
    );

    this.todoList$ = this.routerStateSnapshot.params.pipe(
      map(param => {
        return this.stateService.getListById(Number(param['id']));
      }),
      switchAll()
    )

    this.todoList$.pipe(
      take(1)
    ).subscribe(currentTodoList => {
      if(currentTodoList) {
        this.getControlByFieldName('caption').setValue(currentTodoList.caption)
        this.getControlByFieldName('description').setValue(currentTodoList.description)
        this.getControlByFieldName('color').setValue(currentTodoList.color)
        this.getControlByFieldName('icon').setValue(currentTodoList.icon)
        this.selectedIcon$.next(currentTodoList.icon)
        this.selectedColor$.next(currentTodoList.color)
      }
    })

  }

  getControlByFieldName(fieldName: string): FormControl {
    return this.todoListFrom.get(fieldName)! as FormControl;
  }

  async saveTodoList() {
    const action = await firstValueFrom(this.action$);
    let list = await firstValueFrom(this.todoList$)
    list = {
      ...list,
      caption: this.todoListFrom.value.caption ? this.todoListFrom.value.caption : list.caption,
      description: this.todoListFrom.value.description ? this.todoListFrom.value.description : list.description,
      icon: this.todoListFrom.value.icon ? this.todoListFrom.value.icon : list.icon,
      color: this.todoListFrom.value.color ? this.todoListFrom.value.color : list.color
    }
    if(action) {
      await this.stateService.ModifyList(list)
    } else {
      await this.stateService.AddList(list.caption, list.description, list.color, list.icon)
    }
    await this.router.navigate([AppUrls().home])
  }
}
