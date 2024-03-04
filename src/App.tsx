import '@/assets/styles/app/reset.css';
import '@/assets/styles/app/App.css';
import { RouterProvider } from 'react-router-dom';
import router from './shared/router';

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
