/* EXPRESS SERVER */
import express from 'express'
import bodyParser from 'body-parser'

/* SERVER */
const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('public'))
app.use('/api', api);


/* ROUTER */
import api from './routes'

app.listen(PORT, (req, res) => {
    console.log(`http://127.0.0.1:${PORT} start!`)
})
