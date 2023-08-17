import {
  Center,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";

const AddItem = () => {
  return (
    <Center textAlign="center" me="3%" ms="3%">
      <InputGroup variant="filled" rounded="base" bgColor="white">
        <Input
          h="55"
          variant="filled"
          placeholder="Create a new todo..."
          focusBorderColor="white"
        />
        <InputRightElement h="55" me="5">
          <Button size="sm" colorScheme="blue" variant="solid">
            Add
          </Button>
        </InputRightElement>
      </InputGroup>
    </Center>
  );
};

export default AddItem;
