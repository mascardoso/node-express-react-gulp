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
	require('./gulp-tasks/run-server.js')(gulp, cb);
});

// builds the components serverside
gulp.task('buildComponentsServer', function() {
	require('./gulp-tasks/build-resources.js').server(gulp, CLIENT_COMP_DIR, SERVER_GEN_DIR);
});

// builds the client minified files
gulp.task('buildComponentsClient', function(){
	require('./gulp-tasks/build-resources.js').client(gulp, CLIENT_DIR, SERVER_GEN_DIR);
});

// builds sass files
gulp.task('sass', function () {
	require('./gulp-tasks/build-resources.js').sass(gulp, CLIENT_COMP_DIR, PUBLIC_DIR);
});

gulp.task('build', ['buildComponentsServer', 'buildComponentsClient', 'sass']);