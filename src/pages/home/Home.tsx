import { useState } from 'react';
import { Button } from '@mui/material';
import TodosService from '@/features/todos/api/index';

const Home = (props) => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const fetch = async () => await TodosService.fetchTodos();
  return (
    <div>
      {counter}
      <Button
        variant="outlined"
        onClick={increment}
      >
        increment
      </Button>
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
