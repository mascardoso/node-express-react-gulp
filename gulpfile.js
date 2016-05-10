'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var babel = require('gulp-babel');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserify = require("browserify");
var gutil = require("gulp-util");
var source = require("vinyl-source-stream");
var babelify = require("babelify");
var path = require("path");
var gutil = require('gulp-util');

const CLIENT_DIR = path.resolve(__dirname, 'client');
const CLIENT_COMP_DIR = path.resolve(__dirname, 'client/components');
const SERVER_DIR = path.resolve(__dirname, 'server');
const SERVER_GEN_DIR = path.resolve(__dirname, 'server/generated');
const PUBLIC_DIR = path.resolve(__dirname, 'public');

//Runs the server
gulp.task('start', function (cb) {
	return nodemon({
		script: 'server/server.js'
	}).once('start', cb);
});

// Builds the server
// gulp.task('buildServer', () =>
// 	gulp.src([(SERVER_DIR + '**/**/*.js'), ('!' + SERVER_DIR + '/generated/**/**/.js')])
// 	.pipe(babel({
// 		presets: ['es2015', 'react']
// 	}))
// 	// .pipe(rename('server.js'))
// 	.pipe(gulp.dest('./build'))
// );


// builds the components serverside
gulp.task('buildComponentsServer', () =>
	gulp.src(CLIENT_COMP_DIR + '/**/*.js')
	.pipe(babel({
		presets: ['es2015', 'react']
	}))
	.pipe(gulp.dest(SERVER_GEN_DIR))
);

//builds the client minified files
gulp.task('buildComponentsClient', function(){
	browserify({
		debug: true,
    	entries: [CLIENT_DIR + '/index.js']
	})
    .transform(babelify.configure({
        sourceMapRelative: CLIENT_DIR,
        presets: ["es2015", "react"]
    }))
	.bundle()
	.on('error', function(e){
		gutil.log(e);
	})
	.pipe(source('bundle.js'))
	.pipe(rename('bundle.min.js'))
	.pipe(gulp.dest(PUBLIC_DIR));
});


//builds sass files
gulp.task('sass', function () {
	return gulp.src(CLIENT_COMP_DIR + '/**/*.scss')
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(rename('bundle.min.css'))
	.pipe(gulp.dest(PUBLIC_DIR));
});

//build
gulp.task('build', ['buildComponentsServer', 'buildComponentsClient', 'sass']);