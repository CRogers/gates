gulp = require('gulp')
ts = require('gulp-typescript')
sass = require('gulp-sass')
jade = require('gulp-jade')
plumber = require('gulp-plumber')
browserSync = require('browser-sync')
del = require('del')

paths =
  ts: 'src/scripts/*.ts'
  test: './src/test/*.ts'
  sass: 'src/sass/*.sass'
  jade: 'src/jade/*.jade'

gulp.task 'ts', ->
  tsResult = gulp.src(paths.ts)
    .pipe(ts
      noImplicitAny: true,
      out: 'gates.js'
    )
  return tsResult.js.pipe(gulp.dest('build/'))

gulp.task 'test', ->
  tsResult = gulp.src(paths.test)
  .pipe(ts
      noImplicitAny: true,
      outDir: 'test'
      module: 'amd'
  )
  return tsResult.js.pipe(gulp.dest('build/'))

gulp.task 'sass', ->
  gulp.src paths.sass
    .pipe(plumber())
    .pipe(sass(indentedSyntax: true))
    .pipe(gulp.dest('./build/css/'))
    .pipe(browserSync.reload(stream: true))

gulp.task 'jade', ->
  gulp.src paths.jade
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest('./build/'))

gulp.task 'build', ['jade', 'sass', 'ts']

gulp.task 'watch', ->
  gulp.watch paths.ts, ['ts']
  gulp.watch paths.sass, ['sass']
  gulp.watch paths.jade, ['jade', browserSync.reload]

gulp.task 'serve', ['build', 'watch'], ->
  browserSync
    server: {baseDir: 'build'}

gulp.task 'clean', ->
  del(['build/*'])