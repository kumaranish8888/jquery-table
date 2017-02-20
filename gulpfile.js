var gulp = require('gulp'),
  connect = require('gulp-connect'),
  jshint = require('gulp-jshint');
 
gulp.task('connect', function() {
  connect.server();
});

 
gulp.task('lint', function() {
  return gulp.src('./app/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
 
gulp.task('default', ['connect']);