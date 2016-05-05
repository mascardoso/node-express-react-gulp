import path from 'path';
import express from 'express';
import handlebars from 'express-handlebars';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './generated/app';

const app = express();

//Templates
app.engine('handlebars', handlebars({
            extname:'handlebars',
            defaultLayout:'main'
        }));

app.set('view engine', 'handlebars');

// Static assets
app.use(express.static('public'));

//Routes
app.get('/', (req, res) => {
	res.render('app', {
		app: ReactDOMServer.renderToString(<App />)
	});
});

app.listen(3000, () => console.log('Server is running'));