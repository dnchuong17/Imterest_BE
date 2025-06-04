import express from 'express';
import {
    createImage,
    deleteImage,
    getImageByUserId,
    getImageDetail,
    getImages,
    searchImage,
} from "../controller/imageController.js";
import {Cloudinary} from "../config/cloudinary.config.js";
import {middlewareToken} from "../config/jwt.js";
const imageRoutes = express.Router();

// imageRoutes.post("/",middlewareToken, createImage);
imageRoutes.get("/user/:userId",middlewareToken, getImageByUserId);
imageRoutes.delete('/:id',middlewareToken, deleteImage);
imageRoutes.post('/',middlewareToken, Cloudinary.single("image"), createImage);

//echo-verse
imageRoutes.get("/", getImages);
imageRoutes.get("/search",searchImage);
imageRoutes.get("/:id", getImageDetail);
imageRoutes.get("/internal/user/:userId", getImageByUserId);
imageRoutes.delete('/internal/:id', deleteImage);
imageRoutes.post('/internal', Cloudinary.single("image"), createImage);

export default imageRoutes;
