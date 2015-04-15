var jade = require('gulp-jade');
var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('jade', function() {
  var YOUR_LOCALS = {};
 
  gulp.src('./src/jade/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty: true
    }))
    .pipe(gulp.dest('./www/'))
    .pipe(livereload());
});