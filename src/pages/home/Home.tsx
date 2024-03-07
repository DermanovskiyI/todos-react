import { Button } from '@mui/material';
import TodosService from '@/features/todos/api/index';
import { RootState } from '@/shared/model';
import { useAppDispatch, useAppSelector } from '@/shared/use/redux';
import { autorize } from '@/shared/model/auth-slice';
const Home = () => {
  const isLoginLoading = useAppSelector(
    (state: RootState) => state.auth.isLoading
  );
  const dispatch = useAppDispatch();
  const fetch = async () => {
    await TodosService.fetchTodos();
  };
  const handleAuth = async () => {
    await dispatch(autorize());
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={fetch}
      >
        fetchTodos
      </Button>
      <Button
        variant="contained"
        disabled={isLoginLoading}
        onClick={handleAuth}
      >
        autorize
      </Button>
    </div>
  );
};

export default Home;
