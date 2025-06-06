import express from 'express';
import {createComment, deleteComments, getComments} from "../controller/commentController.js";
import {middlewareToken} from "../config/jwt.js";
const commentRoutes = express.Router();

commentRoutes.get('/:imageId', getComments);
commentRoutes.delete('/:commentId', deleteComments);
commentRoutes.post('/:imageId', middlewareToken, createComment);

//echo-verse
commentRoutes.post('/internal/:imageId', createComment);
export default commentRoutes;