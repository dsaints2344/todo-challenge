import TodoBackground from '../components/todo-background';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <TodoBackground>{children}</TodoBackground>
    </>
  );
};

export default Layout;
