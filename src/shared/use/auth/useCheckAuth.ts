import { useEffect } from 'react';
import { useAppSelector } from '../redux';

import { useNavigate } from 'react-router-dom';
import { RootState } from '@/shared/model';

const useCheckAuth = () => {
  const isAutorized = useAppSelector(
    (state: RootState) => state.auth.isAutorized
  );
  const navigate = useNavigate();

  useEffect(() => {
    console.log('effect', isAutorized);
    if (!isAutorized) {
      navigate('/');
    }
  }, [isAutorized]);
  return {
    isAutorized,
  };
};

export default useCheckAuth;
