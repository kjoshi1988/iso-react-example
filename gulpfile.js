var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    //buffer = require('vinyl-buffer'),
    reactify = require('reactify'),
    packageJSON = require('./package.json');


gulp.task('bundle', function() {
    return browserify(packageJSON.paths.app)
        .transform('reactify', {stripTypes: true, es6: true})
        .bundle()
        .pipe(source(packageJSON.dest.app))
        .pipe(gulp.dest(packageJSON.dest.dist));
});