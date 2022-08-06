import { Injectable } from '@angular/core';
import {BehaviorSubject, firstValueFrom, map, Observable} from 'rxjs';
import { AppState, InitialAppState } from '../models/app-state.model';
import { TodoItem } from '../models/todo-item.model';
import { TodoList } from '../models/todo-list.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  // appState: AppState = InitialAppState();
  appState: AppState = {
    todoItems: [
      {
        id: 1,
        caption: 'Milk',
        listId: 1,
        isCompleted: false
      },
      {
        id: 2,
        caption: 'Sugar',
        listId: 1,
        isCompleted: true
      }
    ],
    todoLists: Array(5).fill(0).map((_, i) => ({
      id: i+1,
      color: 'blue',
      icon: 'stars',
      caption: 'Live Show With A Name',
      description: "Prepare soft drinks and junk food"
    }))
  }

  appState$ = new BehaviorSubject<AppState>(this.appState);

  constructor() { }


  //#region  AppState
  private getAppStateObs() {
    return this.appState$.asObservable();
  }
  //#endregion

  //#region TodoList
  getAllLists(): Observable<TodoList[]> {
    return this.getAppStateObs()
    .pipe(
      map(appState => appState.todoLists)
    );
  }

  getListById(id: number): Observable<TodoList> {
    return this.getAllLists()
    .pipe(
      map(lists => lists.find(list => list.id === id)!)
    );
  }

  async AddList(caption: string, description: string, color: string, icon: string): Promise<number> {
    const newList: TodoList = {
      id: this.appState.todoLists.length + 1,
      caption: caption,
      description: description,
      color: color,
      icon: icon
    };

    this.appState = {
      ...this.appState,
      todoLists: [
        ...this.appState.todoLists,
        newList
      ]
    };

    this.appState$.next(this.appState);

    return newList.id
  }

  async ModifyList(list: TodoList): Promise<void> {
    this.appState = {
      ...this.appState,
      todoLists: this.appState.todoLists.map(todoList => todoList.id === list.id ? list : todoList)
    }
    this.appState$.next(this.appState);
  }

  async DeleteList(listId: number): Promise<void> {

    this.appState = {
      todoLists: this.appState.todoLists.filter(list => list.id !== listId),
      todoItems: this.appState.todoItems.filter(item => item.listId !== listId)
    }

    this.appState$.next(this.appState);
  }
  //#endregion

  //#region TodoItem
  getAllItems(): Observable<TodoItem[]> {
    return this.getAppStateObs()
    .pipe(
      map(appState => appState.todoItems)
    );
  }

  getItem(id: number): Observable<TodoItem> {
    return this.getAppStateObs()
    .pipe(
      map(appState => appState.todoItems.find(item => item.id === id)!)
    );
  }

  getItemsOfList(listId: number): Observable<TodoItem[]> {
    return this.getAppStateObs()
    .pipe(
      map(appState => appState.todoItems.filter(item => item.listId === listId))
    );
  }

  getAllNotCompletedItems(): Observable<TodoItem[]> {
    return this.getAllItems()
    .pipe(
      map(items => items.filter(item => !item.isCompleted))
    )
  }

  async AddTodoItem(listId: number, caption: string): Promise<number> {

    const item: TodoItem = {
      id: this.appState.todoItems.length + 1,
      caption: caption,
      isCompleted: false,
      listId: listId
    }

    this.appState = {
      ...this.appState,
      todoItems: [
        ...this.appState.todoItems,
        item
      ]
    }

    this.appState$.next(this.appState);

    return item.id;
  }

  async MarkAsCompleted(itemId: number): Promise<void> {
    const updatedItem: TodoItem = {
      ...(await firstValueFrom(this.getItem(itemId))),
      isCompleted: true
    };

    this.appState = {
      ...this.appState,
      todoItems: this.appState.todoItems.map(item => item.id === itemId ? updatedItem : item)
    };

    this.appState$.next(this.appState);
  }




  //#endregion
}
