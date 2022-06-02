import express from 'express';
import { getRooms, getaRoom, createaRoom, updateaRoom, deleteaRoom, getroomBySearch, getRoomBooked, likeRoom } from '../controller/roomBooking.js';
import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/', getRooms)
router.get('/search', getroomBySearch)
router.get('/:id', auth, getaRoom)
router.post('/', auth, createaRoom)
router.post('/booked', getRoomBooked)
router.patch('/:id', auth, updateaRoom)
router.delete('/:id', auth, deleteaRoom)
router.patch('/:id/roomlike', auth, likeRoom);
export default router;