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
} from "@chakra-ui/react";
import { todoStore } from "../stores/todo-store";
import { CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";

export const TodoItem = () => {
  const { todos, toogleCompleteTodo, deleteTodo, activeTodos } = todoStore();
  const [idForHover, setIdForHover] = useState<string>("");

  return (
    <Box ms={3}>
      {todos.map((t, i) => {
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
                    color={t.isCompleted ? "GrayText" : "black"}
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
        <Button variant="ghost">All</Button>
        <Button variant="ghost">Active</Button>
        <Button variant="ghost">Completed</Button>
      </HStack>
    </Box>
  );
};
