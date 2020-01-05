import React,{useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';

import axios from 'axios';

const useStyles = makeStyles(theme => ({
    root: {
        width:'800px',
        margin:'0 auto',
    },
    listData: {
        width:'100%',
        dispaly:'flex'
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
      },
      link : {
          "&:hover":{
              textDecoration:'none',
          },
          color:'black',
      }
}));
function BookView({match}) {
    //{history, location, match}

    const [viewData, setViewData] = useState([]);
    const classes = useStyles();
    const id = match.params.id;

    // const viewDataMap = viewData.map((data => (<div key={data.id}> {data.title} </div>))) 
    useEffect(()=>{
        axios.get(`/api/book/${id}`).then(res => {
            console.log('res.data > ',res.data);
            setViewData(res.data[0]);
        })
    },[id,setViewData]);
    return (
        <div className={classes.root}>
            <h1>조회</h1>
            {/* <div>{viewDataMap}</div> */}
            <div className={classes.listImage}>
                    <img alt={viewData.title || "no images"} className={classes.thumbnail} src={viewData.thumbnailURL || "/static/images/default-book.png"} />
                </div>
                <div>
                    <div className={classes.listTitle}> {viewData.title} </div>
                    <div className={classes.listDescription}>저자: {viewData.author} | 발행처: {viewData.publisher} | 발행년도: {viewData.publishYear}</div>
                    <br/>
                    <div>{viewData.statusName} </div>
                </div>

        </div>
    )
}

export default BookView
