import bgDesktopDark from '../assets/bg-desktop-dark.jpg';
import bgMobileDark from '../assets/bg-mobile-dark.jpg';
import { Show, Box, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const TodoBackground = ({ children }: Props) => {
  return (
    <>
      <Show below="sm">
        <Flex
          backgroundImage={bgMobileDark}
          direction="column"
          alignItems="center"
          backgroundRepeat="round"
          h="40vh"
        >
          <Box
            left="0vh"
            right="0vh"
            position="absolute"
            top="25vh"
            w="60vh"
            ms="auto"
            me="auto"
          >
            {children}
          </Box>
        </Flex>
      </Show>
      <Show above="sm">
        <Flex backgroundImage={bgDesktopDark} backgroundRepeat="round" h="40vh">
          <Box
            left="0vh"
            right="0vh"
            position="absolute"
            top="25vh"
            w="60vh"
            ms="auto"
            me="auto"
          >
            {children}
          </Box>
        </Flex>
      </Show>
    </>
  );
};

export default TodoBackground;
