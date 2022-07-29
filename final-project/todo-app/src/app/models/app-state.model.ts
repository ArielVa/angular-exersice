import { TodoItem } from "./todo-item.model";
import { TodoList } from "./todo-list.model";

export interface AppState {
    readonly todoList: TodoList;
    readonly todoItem: TodoItem;
}

export function InitialAppState(): AppState {
    return {
        todoList: {
            id: -1,
            caption: '', 
            listId: -1,
            isCompleted: false 
        },
        todoItem: {
           id: -1,
            caption: '',
            description: '',
            imageUrl: '',
            color: ''
        }
    }
}