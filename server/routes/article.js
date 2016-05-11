var React = require('react');
var express = require('express');
var Router = express.Router();
var ReactDOMServer = require('react-dom/server');
var http = require('http');

// var req = http.request('http://jsonplaceholder.typicode.com/posts', (res) => {

//   res.setEncoding('utf8');

//   res.on('data', (chunk) => {
//     console.log(`BODY: ${chunk}`);
//   });

//   res.on('end', () => {
//     console.log('No more data in response.')
//   })

// });

// req.on('error', (e) => {
//   console.log(`problem with request: ${e.message}`);
// });

// req.end();


var Body = React.createElement(require('../generated/components/app/App.js').default, null);
// var Header = React.createElement(require('../generated/app/App.js').default, null);
// var Footer = React.createElement(require('../generated/app/App.js').default, null);

Router.route('/')

	.get( function(req, res) {

		res.render('index', { 
			body: ReactDOMServer.renderToString(Body),
			meta: {
				description: 'Article detail page',
				author: 'bob',
				keywords: ['news', 'article']
			}
			// footer: ReactDOMServer.renderToString(Footer),
			// header: ReactDOMServer.renderToString(Header)
		});

	});

module.exports = Router;