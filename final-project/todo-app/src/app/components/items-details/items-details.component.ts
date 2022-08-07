import {Component, OnInit} from '@angular/core';
import {filter, interval, map, Observable, Subject, take, takeUntil} from 'rxjs';
import {ItemStatus, TodoItem} from 'src/app/models/todo-item.model';
import {StateService} from 'src/app/services/state.service';

@Component({
  selector: 'app-items-details',
  templateUrl: './items-details.component.html',
  styleUrls: ['./items-details.component.css'],
})
export class ItemsDetailsComponent implements OnInit {

  todoItems$!: Observable<TodoItem[]>
  statusChangerSignal$ = new Subject();
  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    this.todoItems$ = this.stateService.getAllNotCompletedItems();
  }

  async markTodoItemAsCompleted(itemId: number) {
    await this.stateService.MarkAsCompleted(itemId);
  }

  async changeItemStatus(itemId: number, newStatus: ItemStatus) {
    await this.stateService.setItemStatus(itemId, newStatus);
  }
}
