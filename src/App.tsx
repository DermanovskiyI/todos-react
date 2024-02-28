import { useState } from 'react';
import '@/assets/styles/app/App.css';
import { Button } from '@mui/material';

const App = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  return (
    <div>
      {counter}
      <Button
        variant="text"
        onClick={increment}
      >
        increment
      </Button>
    </div>
  );
};

export default App;
