import express from'express';
import { authentication } from "../middleware/authMiddleware";
import { sendMessage, allMessages } from '../controllers/messageControllers';
const router = express.Router();

router.route('/').post(authentication,sendMessage);
router.route('/:chatId').get(authentication,allMessages);

export default router;