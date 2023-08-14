import bgDesktopDark from '../assets/bg-desktop-dark.jpg';
import bgMobileDark from '../assets/bg-mobile-dark.jpg';
import { Show, Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const TodoBackground = ({ children }: Props) => {
  return (
    <>
      <Show below="sm">
        <Box backgroundImage={bgMobileDark} backgroundRepeat="round" h="25vh">
          <Box
            left="0vh"
            right="0vh"
            position="absolute"
            bottom="6vh"
            ms="4vh"
            me="4vh"
          >
            {children}
          </Box>
        </Box>
      </Show>
      <Show above="sm">
        <Box
          backgroundImage={bgDesktopDark}
          backgroundRepeat="round"
          h="40vh"
          w="100%"
        >
          <Box
            left="0vh"
            right="0vh"
            position="absolute"
            bottom="6vh"
            ms="4vh"
            me="4vh"
          >
            {children}
          </Box>
        </Box>
      </Show>
    </>
  );
};

export default TodoBackground;
