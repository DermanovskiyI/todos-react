import './index.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link, Outlet } from 'react-router-dom';
import { Button } from '@mui/material';

import { logout } from '../model/auth-slice';

import useCheckAuth from '../use/auth/useCheckAuth';
import { useAppDispatch } from '../use/redux';

const drawerWidth = 240;
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
    path: '/todo',
    value: 'Todo',
  },
];

const PersonalAccLayout = () => {
  useCheckAuth();
  const dispatch = useAppDispatch();
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
          >
            Личный кабинет
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {pages.map((page) => (
            <ListItem
              key={page.id}
              disablePadding
            >
              <Link
                to={page.path}
                style={{ display: 'flex', width: '100%' }}
              >
                <ListItemButton>
                  <ListItemText primary={page.value} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Button
          variant="text"
          onClick={() => dispatch(logout())}
        >
          Выйти
        </Button>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1 }}
      >
        <Toolbar />
        <div className="content">
          <Outlet />
        </div>
      </Box>
    </Box>
  );
};
export default PersonalAccLayout;
