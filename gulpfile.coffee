gulp = require('gulp')
ts = require('gulp-typescript')
sass = require('gulp-sass')
plumber = require('gulp-plumber')
browserSync = require('browser-sync')

gulp.task 'ts', ->
  tsResult = gulp.src('src/**/*.ts')
    .pipe(ts
      noImplicitAny: true,
      out: 'gates.js'
    )
  return tsResult.js.pipe(gulp.dest('build'))

gulp.task 'sass', ->
  gulp.src 'src/sass/*.sass'
    .pipe(plumber())
    .pipe(sass(indentedSyntax: true))
    .pipe(gulp.dest('./build/css/'))
    .pipe(browserSync.reload(stream: true))