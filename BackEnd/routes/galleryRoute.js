import express from 'express';
import { getGallerys, createaGallery, updateaGallery, deleteaGallery } from '../controller/gallery.js';
import auth from '../middleware/auth.js';

const router = express.Router();
router.get('/', getGallerys)
router.delete('/:id', auth, deleteaGallery)
router.patch('/:id', auth, updateaGallery)
router.post('/', auth, createaGallery)
export default router;