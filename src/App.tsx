import AddItem from './components/add-item';
import Layout from './layout/layout';
import { Box } from '@chakra-ui/react';

const App = () => {
  return (
    <Box>
      <Layout>
        <AddItem />
      </Layout>
    </Box>
  );
};

export default App;
