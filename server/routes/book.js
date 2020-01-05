import express from 'express'

const router = express.Router();

//미결함 조회
router.get('/:id', async (req, res) => {
    const {
        id
    } = req.params;

    console.log('req.params : id > ',id);   
    // <BookListItem thumbnailURL={data.thumbnailURL} title={data.title} author={data.author} publisher={data.publisher} publishYear={data.publishYear}/>
/*
    STATUS
    READY : 대출가능
    RENT : 대출중
    // BOOKING : 예약가능
*/
    //translator
    const srchData =[
        {id:'1', title:'프로 1리액트 : React.js를 이용한 모던 프런트엔드 구축',  author:'저자', translator:"", publisher:'순출판사', publishYear:'2019', status:'READY', statusName:'대출가능'},
        {id:'2', title:'프로 2리액트 : React.js를 이용한 모던 프런트엔드 구축',  author:'저자', translator:"", publisher:'순출판사', publishYear:'2019', status:'READY', statusName:'대출가능'},
        {id:'3', title:'프로 3리액트 : React.js를 이용한 모던 프런트엔드 구축',  author:'저자', translator:"", publisher:'순출판사', publishYear:'2019', status:'READY', statusName:'대출가능'},
        {id:'4', title:'프로 4리액트 : React.js를 이용한 모던 프런트엔드 구축',  author:'저자', translator:"", publisher:'순출판사', publishYear:'2019', status:'READY', statusName:'대출가능'},
        {id:'5', title:'프로 5리액트 : React.js를 이용한 모던 프런트엔드 구축',  author:'저자', translator:"", publisher:'순출판사', publishYear:'2019', status:'READY', statusName:'대출가능'},
        {id:'6', title:'프로 6리액트 : React.js를 이용한 모던 프런트엔드 구축',  author:'저자', translator:"", publisher:'순출판사', publishYear:'2019', status:'READY', statusName:'대출가능'},
        {id:'7', title:'프로 7리액트 : React.js를 이용한 모던 프런트엔드 구축',  author:'저자', translator:"", publisher:'순출판사', publishYear:'2019', status:'READY', statusName:'대출가능'},
        {id:'8', title:'프로 8리액트 : React.js를 이용한 모던 프런트엔드 구축',  author:'저자', translator:"", publisher:'순출판사', publishYear:'2019', status:'READY', statusName:'대출가능'},
        {id:'9', title:'프로 9리액트 : React.js를 이용한 모던 프런트엔드 구축',  author:'저자', translator:"", publisher:'순출판사', publishYear:'2019', status:'READY', statusName:'대출가능'},
        {id:'10', title:'프로 10리액트 : React.js를 이용한 모던 프런트엔드 구축',  author:'저자', translator:"", publisher:'순출판사', publishYear:'2019', status:'READY', statusName:'대출가능'},
    ]
    res.send(srchData);
})


export default router;