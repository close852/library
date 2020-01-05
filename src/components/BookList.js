import React,{Fragment} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
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
}))
function BookList({srchData}) {

    const srchDataMap = srchData.map(data =>(
        <BookListItem key={data.id} id={data.id} thumbnailURL={data.thumbnailURL} title={data.title} author={data.author} publisher={data.publisher} publishYear={data.publishYear} statusName={data.statusName}/>
    ))
    return (
        <Fragment>
            <List>
                {srchDataMap}
            </List>
        </Fragment>
    )
}


function BookListItem({id, thumbnailURL,title, author, publisher, publishYear, statusName}){
    const classes = useStyles();

    return (
        <Fragment>
            <ListItem alignItems="flex-start">
                <div>
                    <Checkbox
                        edge="start"
                        // checked={checked.indexOf(value) !== -1}
                        // tabIndex={-1}
                        // disableRipple
                        // inputProps={{ 'aria-labelledby': labelId }}
                    />
                </div>
                <div className={classes.listImage}>
                    <img alt={title || "no images"} className={classes.thumbnail} src={thumbnailURL || "/static/images/default-book.png"} />
                </div>
                <div>
                    <div className={classes.listTitle}>도서. <Link className={classes.link} to={"/book/view/"+id}>{title}</Link></div>
                    <div className={classes.listDescription}>저자: {author} | 발행처: {publisher} | 발행년도: {publishYear}</div>
                    <br/>
                    <div>자료상태: {statusName} 대출|예약|담기</div>
                </div>
            </ListItem>
            <Divider variant="inset" component="li" />
        </Fragment>

    )
}

export default BookList
