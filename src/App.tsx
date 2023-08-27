import AddItem from "./components/add-item";
import ItemList from "./components/item-list";
import Layout from "./layout/layout";
import { Box, Stack } from "@chakra-ui/react";

const App = () => {
  return (
    <Box w="100%">
      <Layout>
        <Stack gap="8">
          <AddItem />
          <ItemList />
        </Stack>
      </Layout>
    </Box>
  );
};

export default App;
