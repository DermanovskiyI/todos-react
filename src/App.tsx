import { useState } from 'react';
import '@/assets/styles/app/App.css';
import { Button } from '@mui/material';
import TodosService from '@/features/api/todos/index';

const App = () => {
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

export default App;
