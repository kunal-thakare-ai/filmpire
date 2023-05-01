import React, { useEffect } from 'react';
import { Divider, List, ListItemText, ListSubheader, Box, CircularProgress, ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import { useSelector, useDispatch } from 'react-redux';

import { selectGenreOrCategory } from '../../feactures/currentGenreOrCategory';
import useStyles from './styles';
import { useGetGenreQuery } from '../../services/TMDB';
import genres from '../../assets';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

// const demoCategories = [
//   { label: 'Comedy', value: 'comedy' },
//   { label: 'Action', value: 'action' },
//   { label: 'Drama', value: 'drama' },
//   { label: 'Horror', value: 'horror' },
// ];

const bluelogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const redlogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

function Sidebar({ setMobileOpen }) {
  // const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);
  // console.log(genreIdOrCategoryName);
  const dispatch = useDispatch();
  const { data, isFetching } = useGetGenreQuery();
  const theme = useTheme();
  const classes = useStyles();
  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === 'light' ? bluelogo : redlogo}
          alt="logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} to="/" className={classes.links}>
            <ListItemButton onClick={() => dispatch(selectGenreOrCategory(value))} button>
              <img src={genres[label.toLowerCase()]} className={classes.genreImages} height={30} alt="logo" />
              <ListItemText primary={label} />
            </ListItemButton>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genre</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress size="4rem" />
          </Box>
        ) : data.genres.map(({ id, name }) => (
          <Link key={id} to="/" className={classes.links}>
            <ListItemButton onClick={() => dispatch(selectGenreOrCategory(id))} button>
              <img src={genres[name.toLowerCase()]} className={classes.genreImages} height={30} alt="logo" />
              <ListItemText primary={name} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </>
  );
}

export default Sidebar;
