var gulp = require('gulp');
var concat = require('gulp-concat');
 
gulp.task('concat', function() {
	gulp.src('./lib/*.js')
		.pipe(concat('lib.js'))
		.pipe(gulp.dest('./www/assets/js'))
});