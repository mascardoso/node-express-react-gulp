var React = require('react');
var express = require('express');
var Router = express.Router();
var ReactDOMServer = require('react-dom/server');

var Body = React.createElement(require('../generated/app/App.js').default, null);
// var Header = React.createElement(require('../generated/app/App.js').default, null);
var Meta = React.createElement(require('../generated/meta/meta.js').default, null);
// var Footer = React.createElement(require('../generated/app/App.js').default, null);


Router.route('/')

	.get( function(req, res) {

		res.render('index', { 
			body: ReactDOMServer.renderToString(Body),
			meta: ReactDOMServer.renderToString(Meta)
			// footer: ReactDOMServer.renderToString(Footer),
			// header: ReactDOMServer.renderToString(Header)
		});

	});

module.exports = Router;