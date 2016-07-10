var reactRoutes = require("../routes/reactRoutes.jsx");
var ReactRouterMatch = require("react-router").match;
var RouterContext = require("react-router").RouterContext;
var React = require("react");
var ReactDOM = require("react-dom/server");

module.exports = {
    bind: function (app) {
        app.use("/*", function (req, res) {
            ReactRouterMatch({routes: reactRoutes, location: req.originalUrl}, function (error, redirectLocation, renderProps) {

                var content = ReactDOM.renderToString(<RouterContext {...renderProps}/>);

                //iso.add(content, alt.flush());

                res.render('index', {content: content});
            });
        });
    }
};