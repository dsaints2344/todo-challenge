import { Text } from "@chakra-ui/react";
import { todoStore } from "../stores/todo-store";

export const TodoItem = () => {
  const { todos } = todoStore();
  return (
    <>
      {todos.map((t) => {
        return <Text key={t.id}>{t.description}</Text>;
      })}
    </>
  );
};
