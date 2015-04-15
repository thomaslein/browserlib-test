var browserify   = require('browserify');
var watchify     = require('watchify');
var bundleLogger = require('../util/bundleLogger');
var gulp         = require('gulp');
var handleErrors = require('../util/handleErrors');
var source       = require('vinyl-source-stream');
var livereload   = require('gulp-livereload');

gulp.task('browserify', function() {

	var bundler = browserify({
		entries: ['./src/coffee/main'],
		extensions: ['.coffee'],
		debug: true,
		cache: {},
		packageCache: {},
		fullPaths: true
	});
	
	if (global.isWatching){
		bundler = watchify(bundler);
	}

	var bundle = function() {
		bundleLogger.start();

		return bundler
			// Enable source maps!
			.bundle()
			// Report compile errors
			.on('error', handleErrors)
			// Use vinyl-source-stream to make the
			// stream gulp compatible. Specifiy the
			// desired output filename here.
			.pipe(source('main.js')) 
			// Specify the output destination
			.pipe(gulp.dest('./www/assets/js/'))
			// Log when bundling completes!
			.on('end', bundleLogger.end)
			.pipe(livereload());
	};

	if(global.isWatching) {
		bundler.on('update', bundle);
	}

	return bundle();
});
