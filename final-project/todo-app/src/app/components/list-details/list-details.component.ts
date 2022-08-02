import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {BehaviorSubject, map, Observable, Subject} from "rxjs";
import {TodoListIcons} from "../../models/todo-list.model";
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";

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
    description: new FormControl('', [Validators.required, Validators.minLength(30) ,this.minNumOfWordsValidator(10)]),
    icon: new FormControl('', [Validators.required]),
    color: new FormControl('', [Validators.required])
  })

  constructor(private routerStateSnapshot: ActivatedRoute) { }

  ngOnInit(): void {
    this.action$ = this.routerStateSnapshot.params.pipe(
      map(param => param['id'])
    );
  }

  getControlByFieldName(fieldName: string): FormControl {
    return this.todoListFrom.get(fieldName)! as FormControl;
  }

  private minNumOfWordsValidator(numWords: number): (ctrl: AbstractControl) => null | ValidationErrors{
    return ctrl => {

      if(typeof(ctrl.value) !== 'string') return null;
      const wordsCount = ctrl.value.split(' ').length;
      if(wordsCount >= numWords) return null;
      return {
          'numWords': {
            'required': numWords,
            'current': wordsCount
          }
      }
    }
  }
}
