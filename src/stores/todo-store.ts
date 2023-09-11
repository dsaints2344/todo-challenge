import { create } from "zustand";
import { IComputedTodoStore, ITodo, ITodoStore } from "../types/todo";
import { v4 as uuidv4 } from "uuid";
import computed from "zustand-computed";

const computedState = (state: ITodoStore): IComputedTodoStore => ({
  activeTodos: state.todos.filter((t) => !t.isCompleted),
  completedTodos: state.todos.filter((t) => t.isCompleted),
});

export const todoStore = create<ITodoStore>()(
  computed(
    (set) => ({
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

      clearCompletedTodos: () => {
        set(() => ({
          todos: [],
        }));
      },
    }),
    computedState
  )
);
