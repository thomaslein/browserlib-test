var sourcemaps = require('gulp-sourcemaps');
var gulp = require('gulp');
//var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./src/sass/main.sass')
    .pipe(
      sass({
        indentedSyntax:true,
        onError: function (err){
          console.log("SASS ERROR:\n", err);
        }
      })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./www/assets/css'))
    .pipe(livereload());
});