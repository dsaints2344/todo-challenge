import {
  Center,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { todoStore } from "../stores/todo-store";

const AddItem = () => {
  const [newTodo, setNewTodo] = useState<string>("");
  const { addTodo } = todoStore();

  const handleNewTodo = () => {
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <Center textAlign="center" me="3%" ms="3%">
      <InputGroup variant="filled" rounded="base" bgColor="white">
        <Input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          h="55"
          variant="filled"
          placeholder="Create a new todo..."
          focusBorderColor="white"
        />
        <InputRightElement h="55" me="5">
          <Button
            onClick={handleNewTodo}
            isDisabled={newTodo.length < 1}
            size="sm"
            colorScheme="blue"
            variant="solid"
          >
            Add
          </Button>
        </InputRightElement>
      </InputGroup>
    </Center>
  );
};

export default AddItem;
