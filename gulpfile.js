const gulp = require('gulp'),
    sass = require('gulp-sass'),
    sassdoc = require('sassdoc'),
    rename = require('gulp-rename');

const sassPath = 'scss/**/*.scss';

gulp.task('sass', function() {
  return gulp.src(sassPath)
      .pipe(sass({outputStyle:'expanded'}))
      .pipe(gulp.dest('css'));
})

gulp.task('minify', function() {
  return gulp.src('css/spacesuit.css')
      .pipe(sass({outputStyle:'compressed'}))
      .pipe(rename(function(path) {
        path.extname = ".min.css";
      }))
      .pipe(gulp.dest('css'));
})

gulp.task('docs', function() {
  return gulp.src(sassPath)
      .pipe(sassdoc({
        dest: 'docs',
        verbose: true
      }))
})

gulp.task('default', ['sass', 'minify', 'docs'])

gulp.task('watch', ['sass', 'minify'], function() {
  gulp.watch(sassPath, ['sass']);
  gulp.watch('css/*.css', ['minify']);
})
