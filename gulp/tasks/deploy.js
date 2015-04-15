var gulp = require('gulp');

gulp.task('deploy', ['minify-html', 'minify-css', 'uglify']);