'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var babel = require('gulp-babel');

// var browserify = require('browserify');
// var babelify = require('babelify');
// var source = require('vinyl-source-stream');

gulp.task('start', function (cb) {
	return nodemon({
		script: 'index.js'
	}).once('start', cb);
});

// gulp.task('buildServer', function () {
// 	return browserify({entries: './server/index.js', extensions: ['.js'], debug: true})
// 	.transform('babelify', {presets: ['es2015', 'react']})
// 	.bundle()
// 	.pipe(source('server.js'))
// 	.pipe(gulp.dest('./'));
// });



gulp.task('buildServer', () =>
	gulp.src('./server/index.js')
	.pipe(babel({
		presets: ['es2015', 'react']
	}))
	.pipe(gulp.dest('.'))
);
