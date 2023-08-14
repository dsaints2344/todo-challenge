import AddItem from './components/add-item';
import Layout from './layout/layout';
import { Box, Stack } from '@chakra-ui/react';

const App = () => {
  return (
    <Box>
      <Layout>
        <Stack gap="8">
          <AddItem />
        </Stack>
      </Layout>
    </Box>
  );
};

export default App;
