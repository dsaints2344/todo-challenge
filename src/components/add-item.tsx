import {
  Center,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react';

const AddItem = () => {
  return (
    <Center textAlign="center">
      <InputGroup variant="filled" rounded="base" bgColor="white">
        <Input
          h="45"
          variant="filled"
          placeholder="Create a new todo..."
          focusBorderColor="white"
        />
        <InputRightElement h="45" me="5">
          <Button size="sm" colorScheme="blue" variant="solid">
            Add
          </Button>
        </InputRightElement>
      </InputGroup>
    </Center>
  );
};

export default AddItem;
