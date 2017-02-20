var gulp = require('gulp'),
  connect = require('gulp-connect'),
   jshint = require('gulp-jshint');
   var sourcefiles =  ["app/*.js", "index.html", "gulpfile.js"];
 
gulp.task('connect', function() {
  connect.server();
});

 
gulp.task('lint', function() {
  return gulp.src(sourcefiles)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
 
gulp.task('default', ['connect']);