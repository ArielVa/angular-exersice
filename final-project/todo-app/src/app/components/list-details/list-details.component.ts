import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, } from "@angular/router";
import {BehaviorSubject, firstValueFrom, map, Observable, switchAll, take} from "rxjs";
import {TodoList, TodoListIcons} from "../../models/todo-list.model";
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {StateService} from "../../services/state.service";
import {AppUrls} from "../../app-routing.module";

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {

  colorOptions: string[] = [
    'red', 'green', 'blue', 'yellow', 'pink', 'purple', 'teal', 'azure'
  ]
  selectedColor$ = new BehaviorSubject(this.colorOptions[0]);

  icons = TodoListIcons();
  selectedIcon$ = new BehaviorSubject('');

  /*
  false = save, true = edit
  * */
  action$!: Observable<boolean>
  todoList$!: Observable<TodoList>

  todoListFormPopulate$!: Observable<any>
  todoListFrom = new FormGroup({
    caption: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required, this.minContentLengthValidator(3) ,this.minNumOfWordsValidator(1)]),
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

  private minContentLengthValidator(length: number): (ctrl: AbstractControl) => null | ValidationErrors{
    return ctrl => {

      if(typeof(ctrl.value) !== 'string') return null;
      const len = ctrl.value.split('').reduce((len, current) => len + current.trim().length, 0);
      if(len >= length) return null;
      return {
        'minLength': {
          'required': length,
          'current': len
        }
      }
    }
  }

  private minNumOfWordsValidator(numWords: number): (ctrl: AbstractControl) => null | ValidationErrors{
    return ctrl => {

      if(typeof(ctrl.value) !== 'string') return null;
      const wordsCount = ctrl.value.split(' ').reduce((wordsCount, currentWord) => currentWord !== '' ? wordsCount + 1 : wordsCount , 0);
      if(wordsCount >= numWords) return null;
      return {
          'numWords': {
            'required': numWords,
            'current': wordsCount
          }
      }
    }
  }

  async saveTodoList() {
    const action = await firstValueFrom(this.action$);
    if(action) {
      console.log("edit")
      await this.stateService.ModifyList({
        ...this.todoListFrom.value,
        id: (await firstValueFrom(this.todoList$)).id
      });
    } else {
      console.log("save")
      const n = await this.stateService.AddList(this.todoListFrom.value.caption, this.todoListFrom.value.description, this.todoListFrom.value.color, this.todoListFrom.value.icon)
    }
    await this.router.navigate([AppUrls().home])
  }
}
