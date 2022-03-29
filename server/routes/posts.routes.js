import express from 'express';


import {getPosts, createPosts} from '../controllers/posts.controllers.js'
const router = express.Router();

router.get('/', getPosts);
router.get('/', createPosts);
//localhost:8000/posts
export default router;