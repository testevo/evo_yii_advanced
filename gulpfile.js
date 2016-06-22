var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var jsmini = require('gulp-uglify');
var imagemini = require('gulp-imagemin');

gulp.task('default', function() {
  console.log('Hello');
});

gulp.task('js', function() {
  return gulp.src('./backend/web/**/bloodhound.js')
        .pipe(jsmini())
        .pipe(gulp.dest('./jsmini'));
});

gulp.task('css', function() {
    return gulp.src('./backend/web/**/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('./out'));
});

gulp.task('imageminify', function() {
    return gulp.src('./jsmini/banner.png')
        .pipe(imagemini())
        .pipe(gulp.dest('./imagemini'));
});