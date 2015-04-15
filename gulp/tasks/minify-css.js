var gulp = require('gulp')
var minifyCSS = require('gulp-minify-css');
 
gulp.task('minify-css', function() {
  gulp.src('./www/assets/css/*.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('./www/assets/css'))
});