export interface ITodo {
  key: string;
  description: string;
  creationDate: string;
}

export interface ITodos {
  todos: ITodo[];
}
