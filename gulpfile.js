'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var babel = require('gulp-babel');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var include = require("gulp-include");

//Runs the server
gulp.task('start', function (cb) {
	return nodemon({
		script: 'server.js'
	}).once('start', cb);
});

// Builds the server
gulp.task('buildServer', () =>
	gulp.src('./server/index.js')
	.pipe(babel({
		presets: ['es2015', 'react']
	}))
	.pipe(rename('server.js'))
	.pipe(gulp.dest('.'))
);


// builds the components serverside
gulp.task('buildComponentsServer', () =>
	gulp.src('./client/components/**/*.js')
	.pipe(babel({
		presets: ['es2015', 'react']
	}))
	.pipe(gulp.dest('./server/generated'))
);


// builds the components and clientside
gulp.task('buildComponentsClient', () =>
	gulp.src(['./client/*.js'])
	.pipe(include()).on('error', console.log)
	.pipe(babel({	presets: ['es2015', 'react']}))
	.pipe(concat('bundle.js'))
	// .pipe(uglify({mangle: false}))
	.pipe(rename('bundle.min.js'))
	.pipe(gulp.dest('./public'))
);

gulp.task('sass', function () {
	return gulp.src('./client/components/**/*.scss')
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(rename('bundle.min.css'))
	.pipe(gulp.dest('./public'));
});


gulp.task('build', ['buildServer', 'buildComponentsServer', 'buildComponentsClient', 'sass']);