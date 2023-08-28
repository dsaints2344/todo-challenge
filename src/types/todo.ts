export interface ITodo {
  id: string;
  description: string;
  creationDate: Date;
  isCompleted: boolean;
}

export interface ITodos {
  todos: ITodo[];
}

export interface ITodoStore extends ITodos {
  addTodo: (description: string) => void;
  removeTodo: (id: string) => void;
  toogleCompleteTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  getCompletedTodos: () => ITodo[];
  getActiveTodos: () => ITodo[];
}
