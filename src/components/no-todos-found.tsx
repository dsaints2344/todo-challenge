import { Center, Text } from "@chakra-ui/react";

export const NoTodosFound = () => {
  return (
    <Center textAlign="center">
      <Text fontWeight="bold" color="grey" fontSize="7vh">
        No Todos found
      </Text>
    </Center>
  );
};
