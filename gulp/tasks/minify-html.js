var gulp = require('gulp');
var minifyHTML = require('gulp-minify-html');
 
gulp.task('minify-html', function() {
  var opts = {comments:true,spare:true};

  gulp.src('./www/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./www/'))
});