import path from 'path';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './generated/app';

const app = express();

app.set('views', './views');
// set the view engine to ejs
app.set('view engine', 'ejs');

// Static assets
app.use(express.static('public'));

//Routes
app.get('/', (req, res) => {
	res.render('index', { body: ReactDOMServer.renderToString(<App />) });
});

app.listen(3000, () => console.log('Server is running'));
