import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Typography, Box, Button } from '@mui/material';

import { ExitToApp } from '@mui/icons-material';

function Profiles() {
  const { user } = useSelector((state) => state.user);
  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  const favMovies = [];
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>My Profile</Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favMovies.length
        ? (
          <Typography variant="h5">
            Add watchlist here!
          </Typography>
        )
        : (
          <Box>
            Fav movies
          </Box>
        )}
    </Box>
  );
}

export default Profiles;
