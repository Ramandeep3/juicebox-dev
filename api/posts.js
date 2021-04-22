const express = require('express');

const postsRouter = express.Router();

 const{getAllPosts} =require('../db');

postsRouter.use((req, res, next) => {
    console.log("A request is being made to /posts");

    next();
});

postsRouter.get('/',async(req, res) => {
    const allPosts = await getAllPosts();
   
    res.send({
      allPosts
    });
  });
  module.exports = postsRouter;