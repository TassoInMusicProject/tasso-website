// Dependencies
const gulp  = require('gulp'),
    gutil = require('gulp-util'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify');
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    babelify = require('babelify'),

// Tasks
gulp.task('build:es6', function() {
    return browserify({
        entries: './src/js/index.js',
        debug: true
    })
    .transform("babelify", {presets: ['es2015']})
    .bundle()
    .on('error', function (err) { 
        gutil.log("Error : " + err.message);
        this.emit('end'); // This is needed for the watch task, or it'll hang on error
    })
    .pipe(source('variorum.js'))
    .on('error', gutil.log)
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('watch', function() {
    gulp.watch('src/js/**/*.js', ['build:es6']);
})

gulp.task('webserver', function() {
  connect.server({livereload: true, port: 8888});
});

gulp.task('default', ['build:es6']);
gulp.task('run', ['webserver', 'build:es6', 'watch']);