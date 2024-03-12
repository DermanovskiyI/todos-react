import { useContext, useMemo, useState } from 'react';
import { NavigateFunction } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/shared/use/redux';
import { autorize } from '@/shared/model/auth-slice';
import { RootState } from '@/shared/model';
import { ModalContext } from '@/shared/context/modal/ModalContext';

import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';

const AuthModal = ({ navigate }: { navigate: NavigateFunction }) => {
  const modal = useContext(ModalContext);
  const dispatch = useAppDispatch();
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');

  const isLoginLoading = useAppSelector(
    (state: RootState) => state.auth.isLoading
  );
  const isLoginBtnDisabled = useMemo(() => {
    if (!pass.length || !login.length || isLoginLoading) {
      return true;
    }
    return false;
  }, [pass, login, isLoginLoading]);
  const handleAuth = async () => {
    try {
      await dispatch(autorize());
      navigate('/account');
      modal.close();
    } catch (error) {
      console.warn('auth error');
    }
  };
  const closeModal = () => {
    modal.close();
  };

  const onLoginChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const target = event.target as HTMLInputElement;
    setLogin(target.value);
  };
  const onPassChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const target = event.target as HTMLInputElement;
    setPass(target.value);
  };
  return (
    <div>
      <DialogTitle>Авторизация</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eligendi
          eveniet cum fugiat, dolore aliquid magnam recusandae voluptas nemo,
          doloribus omnis ipsa eos est, vel natus. Adipisci necessitatibus fugit
          excepturi!
        </DialogContentText>
        <TextField
          required
          margin="dense"
          id="name"
          name="login"
          label="Логин"
          value={login}
          type="text"
          fullWidth
          variant="outlined"
          onChange={onLoginChange}
        />
        <TextField
          required
          margin="dense"
          id="pass"
          name="pass"
          value={pass}
          label="Пароль"
          type="password"
          fullWidth
          variant="outlined"
          onChange={onPassChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal}>Отмена</Button>
        <Button
          type="submit"
          disabled={isLoginBtnDisabled}
          onClick={handleAuth}
        >
          Войти
        </Button>
      </DialogActions>
    </div>
  );
};

export default AuthModal;
