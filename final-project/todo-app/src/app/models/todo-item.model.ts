export interface TodoItem {
    readonly id: number;
    readonly caption: string;
    readonly listId: number;
    readonly status: ItemStatus;
}

export enum ItemStatus {
  open,
  pending,
  complete
}


