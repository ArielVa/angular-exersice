import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem } from 'src/app/models/todo-item.model';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-items-details',
  templateUrl: './items-details.component.html',
  styleUrls: ['./items-details.component.css'],
})
export class ItemsDetailsComponent implements OnInit {
  

  todoItems$!: Observable<TodoItem[]>

  constructor(private stateService: StateService) {}

  ngOnInit(): void {

    this.todoItems$ = this.stateService.getAllNotCompletedItems();

  }

  async markTodoItemAsCompleted(itemId: number) {
    await this.stateService.MarkAsCompleted(itemId);
  }
}
