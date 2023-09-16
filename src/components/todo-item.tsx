import {
  Checkbox,
  Text,
  Divider,
  Box,
  Spacer,
  Flex,
  IconButton,
  Button,
  HStack,
  useColorMode,
} from "@chakra-ui/react";
import { todoStore } from "../stores/todo-store";
import { CloseIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import { ITodo } from "../types/todo";

type TodosMap = {
  [key: string]: ITodo[];
};

export const TodoItem = () => {
  const {
    todos,
    toogleCompleteTodo,
    deleteTodo,
    activeTodos,
    completedTodos,
    clearCompletedTodos,
  } = todoStore();
  const [idForHover, setIdForHover] = useState<string>("");
  const [todosToDisplay, setTodosToDisplay] = useState<ITodo[]>(todos);
  const { colorMode } = useColorMode();

  const todosByType: TodosMap = {
    all: todos,
    active: activeTodos,
    completed: completedTodos,
  };

  const handleTodosToDisplay = (id?: string) => {
    if (id) {
      setTodosToDisplay(todosByType[id]);
    } else {
      setTodosToDisplay(todos);
    }
  };

  useEffect(() => {
    setTodosToDisplay(todos);
  }, [todos]);

  return (
    <Box ms={3}>
      {todosToDisplay.map((t, i) => {
        return (
          <Box key={t.id}>
            <Flex
              onMouseEnter={() => setIdForHover(t.id)}
              onMouseLeave={() => setIdForHover("")}
            >
              <Checkbox
                colorScheme="purple"
                mt="2.5%"
                mb="3.5"
                onChange={() => toogleCompleteTodo(t.id)}
                isChecked={t.isCompleted}
              >
                <Box ps={4}>
                  <Text
                    color={
                      t.isCompleted || colorMode === "dark"
                        ? "GrayText"
                        : "black"
                    }
                    as={t.isCompleted ? "s" : undefined}
                  >
                    {t.description}
                  </Text>
                </Box>
              </Checkbox>
              <Spacer />
              {idForHover === t.id && (
                <Box w="20%" pt="1%">
                  <IconButton
                    onClick={() => deleteTodo(t.id)}
                    variant="unstyled"
                    aria-label="Delete Todo item"
                    icon={<CloseIcon />}
                  />
                </Box>
              )}
            </Flex>
            {i < todos.length - 1 ? (
              <Divider width="95%" orientation="horizontal" />
            ) : null}
          </Box>
        );
      })}
      <Divider width="95%" orientation="horizontal" />
      <HStack>
        <Text>{activeTodos.length} items left</Text>
        <Spacer />
        <Button
          variant="ghost"
          value="all"
          onClick={(e) => handleTodosToDisplay(e.currentTarget.value)}
        >
          All
        </Button>
        <Button
          value="active"
          variant="ghost"
          onClick={(e) => handleTodosToDisplay(e.currentTarget.value)}
        >
          Active
        </Button>
        <Button
          value="completed"
          variant="ghost"
          onClick={(e) => handleTodosToDisplay(e.currentTarget.value)}
        >
          Completed
        </Button>
        <Spacer />
        <Button
          variant="ghost"
          isDisabled={completedTodos.length === 0}
          onClick={clearCompletedTodos}
        >
          {" "}
          Clear completed todos
        </Button>
      </HStack>
    </Box>
  );
};
