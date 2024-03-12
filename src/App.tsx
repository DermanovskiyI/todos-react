import '@/assets/styles/app/reset.css';
import '@/assets/styles/app/App.css';
import { RouterProvider } from 'react-router-dom';
import router from './shared/router';
import Modal from '@/shared/components/modal/Modal';
const App = () => {
  return (
    <>
      <Modal>
        <RouterProvider router={router} />
      </Modal>
    </>
  );
};

export default App;
