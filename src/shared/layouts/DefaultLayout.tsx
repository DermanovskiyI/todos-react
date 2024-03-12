import './index.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import AuthModal from '@/features/auth/components/modal/AuthModal';
import { IModalConfig, ModalContext } from '../context/modal/ModalContext';
import { useContext } from 'react';
import useCheckAuth from '../use/auth/useCheckAuth';
const pages = [
  {
    id: 1,
    path: '/',
    value: 'Home',
  },
  {
    id: 2,
    path: '/todo',
    value: 'Todo',
  },
];

export default function RootLayout() {
  const modal = useContext(ModalContext);
  const navigate = useNavigate();
  const checkAuth = useCheckAuth();
  const openAuthModal = () => {
    if (checkAuth.isAutorized) {
      navigate('/account');
      return;
    }

    const authModalConfig: IModalConfig = {
      content: <AuthModal navigate={navigate} />,
    };

    modal.open(authModalConfig);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            MUI
          </Typography>
          <Box>
            {pages.map((page) => (
              <Button
                key={page.id}
                sx={{ color: '#fff' }}
              >
                <Link
                  to={page.path}
                  style={{ display: 'flex', width: '100%', color: '#fff' }}
                >
                  {page.value}
                </Link>
              </Button>
            ))}
            <Button
              variant="contained"
              onClick={openAuthModal}
            >
              Личный кабинет
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 1 }}
      >
        <Toolbar />
        <div className="content">
          <Outlet />
        </div>
      </Box>
    </Box>
  );
}
