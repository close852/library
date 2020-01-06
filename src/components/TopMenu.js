import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';


const blueColor = '#1976d2';
const themeColor = blueColor;

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
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
    link : {
        textDecoration:'none',
        color:'white',
    }
}));
function TopMenu() {
const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar variant="dense">
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" className={classes.title}>
                    도서관
                </Typography>
                <Link to="/admin" className={classes.link}><Button color="inherit">Admin</Button></Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default TopMenu
