import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {BehaviorSubject, map, Observable, Subject} from "rxjs";
import {TodoList, TodoListIcons} from "../../models/todo-list.model";
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {StateService} from "../../services/state.service";

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {

  colorOptions: string[] = [
    'red', 'green', 'blue', 'yellow', 'pink', 'purple'
  ]
  selectedColor$ = new BehaviorSubject(this.colorOptions[0]);

  icons = TodoListIcons();
  selectedIcon$ = new Subject<string>();

  action$!: Observable<boolean>

  todoListFrom = new FormGroup({
    caption: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required, this.minContentLengthValidator(3) ,this.minNumOfWordsValidator(1)]),
    icon: new FormControl('', [Validators.required]),
    color: new FormControl('', [Validators.required])
  })

  constructor(private routerStateSnapshot: ActivatedRoute,
              private stateService: StateService) { }

  ngOnInit(): void {
    this.action$ = this.routerStateSnapshot.params.pipe(
      map(param => param['id'])
    );
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
    await this.stateService.AddList(this.todoListFrom.value.caption, this.todoListFrom.value.description, this.todoListFrom.value.color, this.todoListFrom.value.icon)
    console.log(this.todoListFrom.value)
  }
}
