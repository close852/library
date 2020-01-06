import express from 'express';
import search from './search'
import book from './book'
import admin from './admin'
const router = express.Router();

router.use('/search', search);/*requireRole("USER"), */
router.use('/book', book);
router.use('/admin', admin)

export default router;