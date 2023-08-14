import { Box } from '@chakra-ui/react';
import TodoBackground from '../components/todo-background';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <TodoBackground />
      <Box mt="20">{children}</Box>
    </>
  );
};

export default Layout;
