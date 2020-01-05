import express from 'express';
import search from './search'
import book from './book'
const router = express.Router();

router.use('/search', search);/*requireRole("USER"), */
router.use('/book',book);

export default router;