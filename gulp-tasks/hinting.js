/*var jshint = require('gulp-jshint');

module.exports = {

	jshint: function(gulp, CLIENT_COMP_DIR, SERVER_DIR) {

		return gulp
			.src([CLIENT_COMP_DIR + '/**/**/*.js', SERVER_DIR + '/*.js', SERVER_DIR + '/modules/*.js', SERVER_DIR + '/routes/*.js'])
    	.pipe(jshint())
    	// report in case of error
    	.pipe(jshint.reporter('jshint-stylish'))
    	// stopping the execution of the task when an error is encountered
    	.pipe(jshint.reporter('fail'));
	}
}*/