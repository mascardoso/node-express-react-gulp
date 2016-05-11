var React = require('react');
var express = require('express');
var Router = express.Router();
var ReactDOMServer = require('react-dom/server');

var Element = React.createElement(require('../generated/app/App.js').default, null);

//console.log(require('../generated/app/index.js').default);

Router.route('/')

	.get( function(req, res) {

		res.render('index', { body: ReactDOMServer.renderToString(Element) });

	});

module.exports = Router;