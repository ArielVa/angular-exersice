export interface TodoList {
    readonly id: number;
    readonly caption: string;
    readonly description: string;
    readonly icon: string;
    readonly color: string;
}


export const TODO_LIST_ICONS = [
  'shopping_cart', 'stars', 'work', 'event', 'flag'
];

export const TODO_LIST_COLORS = [
  'red', 'green', 'blue', 'yellow', 'pink', 'purple', 'teal', 'azure'
];
