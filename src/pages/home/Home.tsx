import { Button } from '@mui/material';
import TodosService from '@/features/todos/api/index';

const Home = () => {
  const fetch = async () => {
    await TodosService.fetchTodos();
  };

  return (
    <div>
      <h1>Home page</h1>
      <Button
        variant="contained"
        onClick={fetch}
      >
        fetchTodos
      </Button>
    </div>
  );
};

export default Home;
