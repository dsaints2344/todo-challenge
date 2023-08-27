import { MoonIcon } from "@chakra-ui/icons";
import { HStack, IconButton, Text } from "@chakra-ui/react";

type Props = {
  isMobile?: boolean;
};

export const TodoTitle = ({ isMobile }: Props) => {
  return (
    <HStack
      h={isMobile ? "90%" : undefined}
      justifyContent="center"
      pb="100"
      alignItems="center"
      spacing="19%"
      w="100%"
    >
      <Text fontSize="60" color="white" fontWeight="bold">
        TODO
      </Text>

      <IconButton aria-label="dark-mode" icon={<MoonIcon />} />
    </HStack>
  );
};
