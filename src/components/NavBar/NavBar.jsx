import React from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { ClassNames } from '@emotion/react';
import { useTheme } from '@mui/material/styles';

import useStyles from './styles';

function NavBar() {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const isAuthenticated = true;

  return (
    <AppBar positiono="fixed">
      <Toolbar className={classes.toolbar}>
        {isMobile && (
        <IconButton
          color="inherit"
          edge="start"
          style={{ outline: 'none' }}
          onClick={() => {}}
          className={classes.menuButton}
        >
          <Menu />
        </IconButton>
        )}
        <IconButton color="inherit" sx={{ ml: 1 }}>
          {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        {!isMobile && 'search....'}
        <div>
          {!isAuthenticated ? (
            <Button color="inherit">
              Login &nbsp; <AccountCircle />
            </Button>
          ) : (
            <Button
              color="inherit"
              component={Link}
              to="/profile/:id"
              className={classes.linkButton}
              onclick={() => {}}
            >
              {!isMobile && <>My Movies &nbsp;</>}
              <Avatar
                style={{ width: 30, height: 30 }}
                alt="profile"
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              />
            </Button>
          )}
        </div>
        {isMobile && 'search....'}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
