import express from 'express';
import { getAbouts, createAbout, deleteAbout, updateAbout } from '../controller/about.js';
import auth from '../middleware/auth.js';

const router = express.Router();
router.get('/', getAbouts)
router.delete('/:id', auth, deleteAbout)
router.patch('/:id', auth, updateAbout)
router.post('/', auth, createAbout)
export default router;