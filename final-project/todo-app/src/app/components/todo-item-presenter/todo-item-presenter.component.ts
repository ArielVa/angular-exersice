import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ItemStatus} from "../../models/todo-item.model";

@Component({
  selector: 'app-todo-item-presenter',
  templateUrl: './todo-item-presenter.component.html',
  styleUrls: ['./todo-item-presenter.component.css']
})
export class TodoItemPresenterComponent implements OnInit {

  @Input()
  caption!: string;

  @Input()
  status!: ItemStatus;

  todoItemStatuses = ItemStatus;

  @Output()
  completed = new EventEmitter<boolean>();

  @Output()
  itemStatusChanged = new EventEmitter<ItemStatus>();

  constructor() { }

  ngOnInit(): void {
  }

  updateTodoItemStatus() {
    this.completed.emit(true)
  }

  changeItemState() {
    if(this.status === ItemStatus.complete) return;

    if(this.status === ItemStatus.open) {
      this.status = ItemStatus.pending
    } else if (this.status === ItemStatus.pending) {
      this.status = ItemStatus.open;
    }
    this.itemStatusChanged.emit(this.status)
  }
}
