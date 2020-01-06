import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        dispaly:'flex',
        width:'100%',
        height:'100%'
      },
      leftMenu: {
        backgroundColor:'black',
        width:'20%'
      },
      mainArea: {
        backgroundColor:'green',
        width:'80%'
      },
}))

function AdminIndex() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.leftMenu}>LeftMenu</div> 
            <div className={classes.mainArea}>MainArea</div>
        </div>
    )
}

export default AdminIndex
