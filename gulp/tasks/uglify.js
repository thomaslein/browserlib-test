var gulp = require('gulp');
var uglify = require('gulp-uglify');
 
gulp.task('uglify', function() {
  gulp.src('www/assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('www/assets/js/'))
});