import bgDesktopDark from '../assets/bg-desktop-dark.jpg';
import bgMobileDark from '../assets/bg-mobile-light.jpg';
import { Show, Image } from '@chakra-ui/react';

const TodoBackground = () => {
  return (
    <>
      <Show below="md">
        <Image src={bgMobileDark} w="100%" />
      </Show>
      <Show above="md">
        <Image src={bgDesktopDark} w="100%" />
      </Show>
    </>
  );
};

export default TodoBackground;
