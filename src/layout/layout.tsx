import TodoBackground from "../components/todo-background";
import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Box h="100vh">
      <TodoBackground>{children}</TodoBackground>
    </Box>
  );
};

export default Layout;
