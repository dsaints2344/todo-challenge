import { create } from "zustand";
import { ITodo, ITodoStore } from "../types/todo";
import { v4 as uuidv4 } from "uuid";

export const todoStore = create<ITodoStore>((set) => ({
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
    set((state) => ({
      todos: state.todos.map((t) => {
        if (t.id === id) {
          t.isCompleted = !t.isCompleted;
        }
        return t as ITodo;
      }),
    }));
  },
}));
