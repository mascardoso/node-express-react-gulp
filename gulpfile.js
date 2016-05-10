'use strict';

var gulp = require('gulp');
var path = require("path");

const CLIENT_DIR = path.resolve(__dirname, 'client');
const CLIENT_COMP_DIR = path.resolve(__dirname, 'client/components');
const SERVER_DIR = path.resolve(__dirname, 'server');
const SERVER_GEN_DIR = path.resolve(__dirname, 'server/generated');
const PUBLIC_DIR = path.resolve(__dirname, 'public');


// Runs the server
gulp.task('start', function (cb) {
	var stream = require('./gulp-tasks/run-server.js')(gulp, cb);
	return stream;
});

// builds the components serverside
gulp.task('buildComponentsServer', function() {
	var stream = require('./gulp-tasks/build-resources.js').server(gulp, CLIENT_COMP_DIR, SERVER_GEN_DIR);
	return stream;
});

// builds the client minified files
gulp.task('buildComponentsClient', function(){
	var stream = require('./gulp-tasks/build-resources.js').client(gulp, CLIENT_DIR, PUBLIC_DIR);
	return stream;
});

// builds sass files
gulp.task('sass', function () {
	var stream = require('./gulp-tasks/build-resources.js').sass(gulp, CLIENT_COMP_DIR, PUBLIC_DIR);
	return stream;
});

gulp.task('build', ['buildComponentsServer', 'buildComponentsClient', 'sass']);

gulp.task('watch', function() {
	gulp.watch(CLIENT_COMP_DIR + '/**/**/*.scss', ['sass']);
	gulp.watch(CLIENT_COMP_DIR + '/**/**/*.js', ['buildComponentsServer', 'buildComponentsClient']);
});

gulp.task('default', [ 'start', 'watch' ]);