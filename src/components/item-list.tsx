import { Center, Box, Text } from "@chakra-ui/react";
import { todoStore } from "../stores/todo-store";

const ItemList = () => {
  const { todos } = todoStore();

  return (
    <Center textAlign="center">
      <Box backgroundColor="white" boxShadow="xl" w={500} h={150}>
        {todos.map((t) => {
          return (
            <>
              <Text>{t.description}</Text>
            </>
          );
        })}
      </Box>
    </Center>
  );
};

export default ItemList;
