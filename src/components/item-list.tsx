import { Center, Box, VStack } from "@chakra-ui/react";
import { todoStore } from "../stores/todo-store";
import { NoTodosFound } from "./no-todos-found";
import { TodoItem } from "./todo-item";

const ItemList = () => {
  const { todos } = todoStore();

  return (
    <Center textAlign="center">
      <Box
        backgroundColor="white"
        boxShadow="xl"
        rounded="base"
        w="95%"
        h="100%"
      >
        {todos.length > 0 ? <TodoItem /> : <NoTodosFound />}
      </Box>
    </Center>
  );
};

export default ItemList;
