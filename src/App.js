import React from 'react';
import { Route, Switch } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';

import BookView from 'components/BookView'
import Portal from 'components/Portal'

const blueColor = '#1976d2';
const themeColor = blueColor;

export default function App() {

  const useStyles = makeStyles(theme => ({
    root: {

    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    appBar: {
      backgroundColor:`${themeColor}`,
      height:'60px',
      display:'flex',
      justifyContent:'center',
    },

  
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
       <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            도서관
          </Typography>
        </Toolbar>
      </AppBar>

      <Switch>
          <Route exact path="/" component={Portal}></Route>
          <Route path="/book/view/:id" component={BookView}></Route>
      </Switch>
    </div>
  );
}
