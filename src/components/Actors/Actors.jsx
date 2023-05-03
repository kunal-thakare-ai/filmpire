import React from 'react';
import { Modal, Typography, Button, ButtonGroup, Grid, Box, CircularProgress, Rating } from '@mui/material';

import { useParams } from 'react-router-dom';
import useStyles from './styles';
import { useGetActorQuery } from '../../services/TMDB';

function Actors() {
  const { id } = useParams();
  const classes = useStyles();
  const { data, ifFetching, error } = useGetActorQuery(id);
  console.log(data);
  return (
    <Grid container className={classes.containerSpaceAround}>
      <Grid item sm={12} lg={4}>
        <img className={classes.poster} src={`https://image.tmdb.org/t/p/w500/${data?.profile_path}`} alt={data?.name} />
      </Grid>
      <Grid item container direction="column" lg={7}>
        <Typography style={{ marginBottom: '20px' }} variant="h4" align="center" gutterBottom>
          {data?.name}
        </Typography>
        <Typography variant="h5" gutterBottom>
          Born: {data?.birthday}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Actors;
