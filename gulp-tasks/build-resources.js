var babel = require('gulp-babel');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserify = require("browserify");
var gutil = require("gulp-util");
var source = require("vinyl-source-stream");
var babelify = require("babelify");
var sassGlob = require('gulp-sass-glob');

module.exports = {

	server: function(gulp, CLIENT_COMP_DIR, SERVER_GEN_DIR) {

		return gulp
			.src(CLIENT_COMP_DIR + '**/**/*.js')
			.pipe(babel({
				presets: ['es2015', 'react']
			}))
			.pipe(gulp.dest(SERVER_GEN_DIR));

	},

	client: function(gulp, CLIENT_DIR, PUBLIC_DIR) {

		return browserify({
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

	},

	sass: function(gulp, CLIENT_COMP_DIR, PUBLIC_DIR) {

		return gulp
			.src(CLIENT_COMP_DIR + '/app/App.scss')
			.pipe(sassGlob())
			.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
			.pipe(rename('bundle.min.css'))
			.pipe(gulp.dest(PUBLIC_DIR));

	}
}