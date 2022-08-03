import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-todo-item-presenter',
  templateUrl: './todo-item-presenter.component.html',
  styleUrls: ['./todo-item-presenter.component.css']
})
export class TodoItemPresenterComponent implements OnInit {

  @Input()
  caption!: string;

  @Input()
  isCompleted!: boolean;

  @Output()
  completed = new EventEmitter<boolean>();

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  updateTodoItemStatus() {
    this.completed.emit(true)
  }
}
