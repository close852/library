import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink,Switch,Route } from 'react-router-dom';

//https://demos.creative-tim.com/material-dashboard-react/#/admin/typography
const drawerWidth = 300;
const topMargin= 64;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:'black',
    color:'white',
  },
  leftLogo: {
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height:`${topMargin}px`,
  },
  mainTop: {
    height:`${topMargin}px`,
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor:'yellow',
    paddingLeft: theme.spacing(2),

  },
  container: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    // paddingLeft: theme.spacing(3),
  },
  contents: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  divder: {
      backgroundColor:'white',
  },
  listItem: {
      height:'64px',
  },
  active: {
    backgroundColor:'yellow'
  },
  link : {
    textDecoration:'none',
    // "&:hover":{
    //     textDecoration:'none',
    // },
    color:'white',
  }


}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.leftLogo}> 도서관 관리자</div>
        <Divider className={classes.divder} variant="middle" />
        <List>
          {['통계자료', '도서등록', '도서조회', '도서 추천 리스트'].map((text, index) => (
            <ListItem button={true} key={text} className={classes.listItem}>
              <NavLink  to="/admin/main" className={classes.link} activeClassName={classes.active} >
                <ListItemText>{text}</ListItemText>
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.container}>
        <div className={classes.mainTop}>본문 탑 영역</div>
        <div className={classes.contents}>본문시작</div>
            <Switch>
            <Route path="/admin/main" ><div>test!</div></Route>
        </Switch>

      </main>
    </div>
  );
}
