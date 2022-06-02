import express from 'express';
import { getKalijs, getKalij, getKal, createKalij, updateKalij, deleteKalij, getKalsBySearch, likeFood, commentFood } from '../controller/kalijinfo.js';
import auth from '../middleware/auth.js';
// import multer from "multer";
// import { body } from "express-validator";
const router = express.Router();

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads');
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-'+ file.originalname)
//     }
// });
//  const fileFilter = (req, file, cb)=> {
//     if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
//         return cb(new Error('Only .png or .jpeg files are allowed!'), false);
//     }else{
//     cb(null, true);
// }}
// const upload = multer({ storage: storage, limits: { fileSize: 1024 * 1024 * 1 }, fileFilter: fileFilter });

router.get('/', getKalijs)
router.get('/all', getKal)
router.get('/all/search', getKalsBySearch)
router.get('/:id', auth, getKalij)
// router.post('/', upload.single('selectedFile'), createKalij)
// router.patch('/:id',upload.single('selectedFile'), updateKalij)
router.post('/', auth, createKalij)
router.patch('/:id', auth, updateKalij)
router.patch('/:id/foodlike', auth, likeFood);
router.post('/:id/foodcomment', auth, commentFood);
router.delete('/:id', auth, deleteKalij)
export default router;