const gulp = require('gulp'),
    sass = require('gulp-sass');

const sassPath = 'scss/**/*.scss';

gulp.task('sass', function() {
  return gulp.src(sassPath)
      .pipe(sass())
      .pipe(gulp.dest('css'));
})

gulp.task('watch', ['sass'], function() {
  gulp.watch(sassPath, ['sass']);
})
