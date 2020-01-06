import express from 'express'
import axios from 'axios'
//책 내용 가져오기 위해 필요
import cheerio from 'cheerio'

const router = express.Router();

router.get('/', (req, res) => {

    console.log('/api/admin');

    res.send("");

})
//미결함 조회
router.get('/book/search/:keyword', async (req, res) => {
    let {
        keyword,
        display,
        start
    } = req.params;
    console.log('keyword,display,start', keyword, display, start)
    if (!display) {
        display = 1;
    }
    if (!start) {
        start = 1;
    }
    // display = display ? display : 10;
    // start = start ? start : 1;

    console.log('req.params : keyword > ', keyword, display, start, encodeURI(keyword));
    const url = `https://openapi.naver.com/v1/search/book.json?query=${encodeURI(keyword)}&display=${display}&start=${start}`
    axios.get(url, {
        headers: {
            'X-Naver-Client-Id': 'iXXVxjcsnSWsyoDDdCoi',
            'X-Naver-Client-Secret': 'gTXLoSAp_G'
        }
    }).then(res => {
        const items = res.data.items;
        console.log('items > ', res.data, items)
        items && items.forEach(async item => {
            console.log('title : ', item.title)
            console.log('link : ', item.link)
            console.log('image : ', item.image)
            console.log('author : ', item.author)
            console.log('publisher : ', item.publisher)
            console.log('pubdate : ', item.pubdate)
            console.log('isbn : ', item.isbn)
            console.log('---------------------------')

            const contentData = await getHTML(item.link);
            console.log('contentData > ', contentData)
        })
    })

})


const getHTML = async link => {
    return await axios.get(link).then(html => {
        const $ = cheerio.load(html.data);

        //책소개
        const bookIntroContent = $("#bookIntroContent").children("p");//책소개

        //저자이름
        const authorIntroContentAuthor = $("#authorIntroContent").children("strong");//저자소개

        //저자소개
        const authorIntroContent = $("#authorIntroContent").children("p");//저자소개

        //목차
        const tableOfContentsContent = $("#tableOfContentsContent").children("p");//목차

        // console.log('bookIntroContent > \n', (bookIntroContent.html()))

        // console.log('authorIntroContentAuthor > \n', (authorIntroContentAuthor.html()))
        // console.log('authorIntroContent > \n', (authorIntroContent.html()))

        // console.log("----------------------------------")
        // //목차
        // console.log('tableOfContentsContent > \n', (tableOfContentsContent.html()))
        const content = {
            bookInfo: bookIntroContent.html(),
            author: authorIntroContentAuthor.html(),
            authorInfo: authorIntroContent.html(),
            index: tableOfContentsContent.html()
        }
        return content;
    })
}
/*
const url = "http://book.naver.com/bookdb/book_detail.php?bid=1533622";

axios.get(url).then(html => {
    const $ = cheerio.load(html.data);

    //책소개
    const bookIntroContent = $("#bookIntroContent").children("p");//책소개

    //저자이름
    const authorIntroContentAuthor = $("#authorIntroContent").children("strong");//저자소개

    //저자소개
    const authorIntroContent = $("#authorIntroContent").children("p");//저자소개

    //목차
    const tableOfContentsContent = $("#tableOfContentsContent").children("p");//목차

    console.log('bookIntroContent > \n', String(bookIntroContent.html()))

    console.log('authorIntroContentAuthor > \n', String(authorIntroContentAuthor.html()))
    console.log('authorIntroContent > \n', String(authorIntroContent.html()))

    console.log("----------------------------------")
    //목차
    console.log('tableOfContentsContent > \n', String(tableOfContentsContent.html()))
})
*/


export default router;