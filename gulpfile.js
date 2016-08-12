// Assigning modules to local variables
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
// var header = require('gulp-header');
// var cleanCSS = require('gulp-clean-css');
// var rename = require("gulp-rename");
// var uglify = require('gulp-uglify');
var bower = require('gulp-bower');
var pkg = require('./package.json');

// Default task
gulp.task('default', ['minify-css', 'minify-js', 'bower']);


// update bower dependencies
gulp.task('bower', function() {
    return bower();
});

// Minify CSS
gulp.task('minify-css', function() {
    // return gulp.src('css/agency.css')
    //     .pipe(cleanCSS({ compatibility: 'ie8' }))
    //     .pipe(rename({ suffix: '.min' }))
    //     .pipe(gulp.dest('css'))
    //     .pipe(browserSync.reload({
    //         stream: true
    //     }))
});

// Minify JS
gulp.task('minify-js', function() {
    // return gulp.src('js/agency.js')
    //     .pipe(uglify())
    //     .pipe(header(banner, { pkg: pkg }))
    //     .pipe(rename({ suffix: '.min' }))
    //     .pipe(gulp.dest('js'))
    //     .pipe(browserSync.reload({
    //         stream: true
    //     }))
});



// Configure the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: ''
        },
    })
})

// Watch Task that compiles LESS and watches for HTML or JS changes and reloads with browserSync
gulp.task('dev', ['browserSync', 'minify-css', 'minify-js', 'bower'], function() {
    gulp.watch('less/*.less', ['less']);
    gulp.watch('css/*.css', ['minify-css']);
    gulp.watch('js/*.js', ['minify-js']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('js/**/*.js', browserSync.reload);
});