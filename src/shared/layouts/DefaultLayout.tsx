import './index.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, Outlet } from 'react-router-dom';

const pages = [
  {
    id: 1,
    path: '/',
    value: 'Home',
  },
  {
    id: 2,
    path: '/todo',
    value: 'About',
  },
  {
    id: 3,
    path: '/account',
    value: 'Account',
  },
];

export default function RootLayout() {
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
