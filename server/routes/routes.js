var article = require('./article.js');

module.exports = function(app){

	app.use('/article', article);

};