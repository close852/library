import React, {useState, useEffect} from 'react';
// import { Route, Switch } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

import MenuIcon from '@material-ui/icons/Menu';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import axios from 'axios'

import BookList from 'components/BookList'
const blueColor = '#1976d2';
const themeColor = blueColor;
const activeColor='blue'

export default function App() {
  const [keyword,setKeyword] = useState(''); 
  const [srchData, setSrchData] = useState([]);
  const [srchTarget,setSrchTarget] = useState('*');
  const [height, setHeight] = useState(0);
  const [fixed,setFixed] = useState(false);

  const useStyles = makeStyles(theme => ({
    root: {
      // flexGrow: 1,
      // display:'flex',
      // justifyContent:'flex-start',
      // flexDirection:'column',
      // height:'100%',
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
    header: {
      width:'100%',
      height:`${300-height}px`,
      marginTop:theme.spacing(2),
      backgroundColor:'white',
      zIndex:'10',
      border:'1px solid white',
      borderBottomColor:'black',
    },
    fixed: {
      position:'fixed',
      // height:'100px',
      top:'0px',
      left:'0px',
      marginTop:0,
    },

    searchArea: {
      display:'flex',
      justifyContent:'center',
      height:'100%'
    },
    searchBar: {
      display:'flex',
      justifyContent:'center',
      margin:'auto',
    },
    searchField: {
      display:'flex',
      justifyContent:'center',
      width:'500px',
      margin:'auto',
    },
  
    searchIcons: {
      display:'flex',
      justifyContent:'center',
      margin:'auto',
      backgroundColor:`${themeColor}`,
      width:'110px',
      height:'56px',
      color:'white',
      borderRadius:'4px',
      "&:hover": {
        cursor:'pointer'
      },
      "&:active": {
        backgroundColor:`${activeColor}`
      },
    },
  
    container: {
      // marginTop:'150px',
      width:'800px',
      margin:'0 auto',
    },

    thumbnail: {
      width:'100px',
      height:'150px'
    },
    listImage: {
      marginRight:'30px'
    },
    listTitle: {
      fontSize:'20px'
    },
    listDescription: {
      color:'#666666'
    }
    ,srchTarget: {
      width:'100px'
    },

  
  }));

  const classes = useStyles();

  

  /* SEARCHBAR FOCUS */
  useEffect(()=>{
    // document.getElementById('keyword').focus();
  },[])


  useEffect(()=>{
    window.onscroll = function(e) {
      console.log(e.currentTarget)
      if(Number(window.pageYOffset)<150){
        setHeight(Number(0))
        setFixed(false);
      }else{
        setHeight(Number(200))
        setFixed(true);
      }
   }
  },[])

  const handleSrchTargetChange =(e)=>{
    setSrchTarget(e.target.value);
  }

  /*onSearch -> axios.get('/api/search/:keyword) */
  const onSearch = (e) =>{
    if(keyword.trim().length===0){
      return;
    }
    axios.get(`/api/search/${encodeURI(keyword)}?srchTarget=${srchTarget}`).then(res =>{
      console.log('res.data > ',res.data)

      setSrchData(res.data);
    })
  }

  /* Press Enter, onSearch() */
  const onKeyPress = (e) => {
    console.log(e.key);
    if(e.key === "Enter"){
      console.log(e.target.value)
      onSearch();
    }
  }

  const handleKeywordChange = e => {
    // console.log('handleKeywordChange > ');
    setKeyword(e.target.value);
  }

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
      <div className={classes.header +" " +(fixed?classes.fixed:"")}>
         <div className={classes.searchArea}>
          <div className={classes.searchBar}>
            <div>
            <FormControl variant="outlined">
              <Select
                id="demo-simple-select-outlined"
                value={srchTarget}
                onChange={handleSrchTargetChange}
                className={classes.srchTarget}
              >
                <MenuItem value={"*"}>전체</MenuItem>
                <MenuItem value={"title"}>서명</MenuItem>
                <MenuItem value={"author"}>저자</MenuItem>
                <MenuItem value={"publisher"}>발행처</MenuItem>
              </Select>
            </FormControl>
            &nbsp;
            </div>
            <div className={classes.searchField}><TextField id="keyword" variant="outlined" style={{width:'100%'}} onKeyPress={onKeyPress} value={keyword} onChange={handleKeywordChange}></TextField></div>&nbsp;
              <div className={classes.searchIcons} onClick={onSearch} ><p className={classes.searhText}>검색</p></div>
            </div>
        </div> 
      </div>
      <div className={classes.container +" " +(fixed?classes.containerFixed:"")}>
          <BookList srchData={srchData}/>
      </div>
    </div>
  );
}
