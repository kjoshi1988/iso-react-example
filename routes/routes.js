var express = require('express'),
    router = express.Router();
var ReactDomServer = require('react-dom/server');
//var Layout = require("../lib/components/layout.jsx");

router.route('/').get(function(req, res, next){
    //res.render("index", {content: ReactDomServer.renderToString()})
    next();
});

//router.route('/ajax/posts').get(PostController.loadPostsViaAjax);
//router.route('/post/:id/:slug').get(PostController.showSinglePost);
//router.route('/ajax/post/:id').get(PostController.loadSinglePostViaAjax);

module.exports = router;