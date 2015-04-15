var gulp = require('gulp');
var stylus = require('gulp-stylus');
var nib = require('nib');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');
 
gulp.task('stylus', function () {
  gulp.src('./src/stylus/*.styl')
  	.pipe(sourcemaps.init())
    .pipe(stylus({use: [nib()]}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./www/assets/css'))
    .pipe(livereload());
});