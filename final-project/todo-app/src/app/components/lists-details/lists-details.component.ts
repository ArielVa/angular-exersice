import { Component, OnInit } from '@angular/core';
import {StateService} from "../../services/state.service";
import {Observable} from "rxjs";
import {TodoList} from "../../models/todo-list.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-lists-details',
  templateUrl: './lists-details.component.html',
  styleUrls: ['./lists-details.component.css']
})
export class ListsDetailsComponent implements OnInit {

  lists$!: Observable<TodoList[]>;

  constructor(private stateService: StateService,
              private router: Router) { }

  ngOnInit(): void {
    this.lists$ = this.stateService.getAllLists();
  }

  async redirectToListDetails(listId: number) {
    await this.router.navigate([`lists/${listId}/edit`])
  }
}
