import {Injectable} from '@angular/core';
import {BehaviorSubject, firstValueFrom, map, Observable, Subject, takeUntil, timer} from 'rxjs';
import {AppState} from '../models/app-state.model';
import {ItemStatus, TodoItem} from '../models/todo-item.model';
import {TodoList} from '../models/todo-list.model';

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
        status: ItemStatus.open
      },
      {
        id: 2,
        caption: 'Sugar',
        listId: 1,
        status: ItemStatus.open
      }
    ],
    todoLists: Array(1).fill(0).map((_, i) => ({
      id: i+1,
      color: 'blue',
      icon: 'stars',
      caption: 'Live Show With A Name',
      description: "Prepare soft drinks and junk food"
    }))
  }


  itemStatusSignals: Subject<void>[] = [];
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
      map(appState =>  {
        this.itemStatusSignals = Array(appState.todoItems.length)
          .fill('')
          .map(_ => new Subject<void>())
        return appState.todoItems
      })
    );
  }

  getItem(id: number): Observable<TodoItem> {
    return this.getAllItems()
    .pipe(
      map(items => items.find(item => item.id === id)!)
    );
  }

  getItemsOfList(listId: number): Observable<TodoItem[]> {
    return this.getAllItems()
    .pipe(
      map(items => items.filter(item => item.listId === listId))
    );
  }

  getAllNotCompletedItems(): Observable<TodoItem[]> {
    return this.getAllItems()
    .pipe(
      map(items => items.filter(item => item.status !== ItemStatus.complete))
    )
  }

  async AddTodoItem(listId: number, caption: string): Promise<number> {

    const item: TodoItem = {
      id: this.appState.todoItems.length + 1,
      caption: caption,
      status: ItemStatus.open,
      listId: listId
    }

    this.appState = {
      ...this.appState,
      todoItems: [
        ...this.appState.todoItems,
        item
      ]
    }

    this.itemStatusSignals = Array(this.appState.todoItems.length)
      .fill('')
      .map(_ => new Subject<void>())
    this.appState$.next(this.appState);

    return item.id;
  }

  async MarkAsCompleted(itemId: number): Promise<void> {
    const updatedItem: TodoItem = {
      ...(await firstValueFrom(this.getItem(itemId))),
      status: ItemStatus.complete
    };

    this.appState = {
      ...this.appState,
      todoItems: this.appState.todoItems.map(item => item.id === itemId ? updatedItem : item)
    };

    this.appState$.next(this.appState);
  }

  private updateItemStatusState(updatedItem: TodoItem, newStatus: ItemStatus) {
    updatedItem = {
      ...updatedItem,
      status: newStatus
    }

    this.appState = {
      ...this.appState,
      todoItems: this.appState.todoItems.map(item => item.id === updatedItem.id ? updatedItem : item)
    }

    this.appState$.next(this.appState);
  }

  async setItemStatus(itemId: number, newStatus: ItemStatus): Promise<void> {

    let updatedItem = this.appState.todoItems.find(item => item.id === itemId)!
    let idx = this.appState.todoItems.indexOf(updatedItem);

    console.log(this.itemStatusSignals[idx])
    if(newStatus === ItemStatus.pending) {
      this.updateItemStatusState(updatedItem, ItemStatus.pending);
      timer(5 * 1000).pipe(
        map(t => this.updateItemStatusState(updatedItem, ItemStatus.complete)),
        takeUntil(this.itemStatusSignals[idx])
      ).subscribe({
        complete() {
        }
      })
    } else {
      this.itemStatusSignals[idx].next()
      this.updateItemStatusState(updatedItem, newStatus);
    }
  }

  //#endregion
}
