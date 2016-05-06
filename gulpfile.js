'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('start', ['browser-sync']);

gulp.task('browser-sync', ['nodemon'], function() {

	browserSync.init(null, {
		proxy: "localhost:3000",
        browser: "google chrome",
        port: 7000
	});

});

gulp.task('nodemon', function (cb) {
    return nodemon({
      script: 'server.js'
    }).once('start', cb);
});

// gulp.task('buildServer', function () {
//     return browserify({entries: './server/index.js', extensions: ['.js'], debug: true})
//         .transform('babelify', {presets: ['es2015', 'react']})
//         .bundle()
//         .pipe(source('server.js'))
//         .pipe(gulp.dest('./'));
// });

