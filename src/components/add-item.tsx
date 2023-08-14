import { Center, Input } from '@chakra-ui/react';

const AddItem = () => {
  return (
    <Center textAlign="center">
      <Input variant="filled" placeholder="Create a new todo..." />
    </Center>
  );
};

export default AddItem;
