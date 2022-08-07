import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ItemStatus} from "../../models/todo-item.model";
import {StateService} from "../../services/state.service";

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
  itemStatusChanged = new EventEmitter<ItemStatus>();

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
  }

  changeItemState() {
    this.itemStatusChanged.next(this.status === ItemStatus.open ? ItemStatus.pending : ItemStatus.open)
  }
}
