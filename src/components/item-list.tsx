import { Center, Box } from "@chakra-ui/react";
import { todoStore } from "../stores/todo-store";
import { NoTodosFound } from "./no-todos-found";
import { TodoItem } from "./todo-item";

const ItemList = () => {
  const { todos } = todoStore();

  return (
    <Center textAlign="center">
      <Box backgroundColor="white" boxShadow="xl" w="100%" h="100%">
        {todos.length > 0 ? <TodoItem /> : <NoTodosFound />}
      </Box>
    </Center>
  );
};

export default ItemList;
