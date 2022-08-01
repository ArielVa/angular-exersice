import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  numTodoLists$!: Observable<number>;
  numItems$!: Observable<number>;
  numActiveItems$!: Observable<number>; 



  constructor(private stateService: StateService) { }

  ngOnInit(): void {

    this.numTodoLists$ = this.stateService.getAllLists().pipe(
      map(lists => lists.length)
    );

    this.numItems$ = this.stateService.getAllItems().pipe(
      map(items => items.length)
    );

    this.numActiveItems$ = this.stateService.getAllNotCompletedItems().pipe(
      map(openItems => openItems.length)
    );

  }

}
