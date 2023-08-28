import { create } from "zustand";
import { ITodo, ITodoStore } from "../types/todo";
import { v4 as uuidv4 } from "uuid";
export const todoStore = create<ITodoStore>((set, get) => ({
  todos: [],
  addTodo: (description: string) => {
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: uuidv4(),
          description,
          creationDate: new Date(),
          isCompleted: false,
        } as ITodo,
      ],
    }));
  },
  removeTodo: (id: string) => {
    set((state) => ({
      todos: state.todos.filter((t) => {
        t.id !== id;
      }),
    }));
  },

  toogleCompleteTodo: (id: string) => {
    set(({ todos }) => ({
      todos: todos.map((t) => {
        if (t.id === id) {
          const newTodo = { ...t, isCompleted: !t.isCompleted } as ITodo;
          return newTodo;
        }

        return { ...t };
      }),
    }));
  },

  deleteTodo: (id: string) => {
    set(({ todos }) => ({
      todos: todos.filter((item) => item.id !== id),
    }));
  },
  getCompletedTodos: () => {
    return get().todos.filter((item) => item.isCompleted);
  },
  getActiveTodos: () => {
    return get().todos.filter((item) => !item.isCompleted);
  },
}));
