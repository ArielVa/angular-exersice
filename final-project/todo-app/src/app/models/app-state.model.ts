import { TodoItem } from "./todo-item.model";
import { TodoList } from "./todo-list.model";

export interface AppState {
    readonly todoLists: TodoList[];
    readonly todoItems: TodoItem[];
}

export function InitialAppState(): AppState {
    return {
        todoLists: [],
        todoItems: []
    }
}