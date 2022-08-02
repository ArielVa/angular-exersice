export interface TodoList {
    readonly id: number;
    readonly caption: string;
    readonly description: string;
    readonly icon: string;
    readonly color: string;
}

export function TodoListIcons() {
  return [
    'shopping_cart', 'stars', 'work', 'event', 'flag'
  ];
}
