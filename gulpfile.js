var gulp        = require('gulp');
var sass        = require('gulp-ruby-sass');
var watch       = require('gulp-watch');
var imagemin    = require('gulp-imagemin');
var connect     = require('gulp-connect-php');

gulp.task('connect', function(){
    connect.server();
});

gulp.task('sass', function(){
    return sass('assets/sass/**/*')
    .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', function(){
   gulp.watch('assets/sass/**/*', ['sass'])
});

gulp.task('build-img',function(){
    gulp.src('assets/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('assets/img'));
});

//task deafault Gulp
gulp.task('default',['sass','watch','build-img']);