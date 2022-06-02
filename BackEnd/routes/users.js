import express from 'express';
import { signin, signup, deleteUsers, updateUsers, getUsers, getVerified, getMessage } from '../controller/user.js';
import auth from '../middleware/auth.js';
const router = express.Router();

router.post('/signin', signin)
router.post('/signup', signup)
router.get('/all', auth, getUsers)
router.post('/play', getMessage)
router.get('/:id/verify/:token', getVerified)
// if you want add auth in getVerified for security
router.patch('/:id', auth, updateUsers)
router.delete('/:id', auth, deleteUsers)
export default router;