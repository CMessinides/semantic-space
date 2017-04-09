const gulp = require('gulp'),
    sass = require('gulp-sass'),
    sassdoc = require('sassdoc');

const sassPath = 'scss/**/*.scss';

gulp.task('sass', function() {
  return gulp.src(sassPath)
      .pipe(sass())
      .pipe(gulp.dest('css'));
})

gulp.task('docs', function() {
  return gulp.src(sassPath)
      .pipe(sassdoc({
        dest: 'docs',
        verbose: true
      }))
})

gulp.task('default', ['sass', 'docs'])

gulp.task('watch', ['sass'], function() {
  gulp.watch(sassPath, ['sass']);
})
