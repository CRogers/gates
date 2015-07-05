gulp = require('gulp')
ts = require('gulp-typescript')
sass = require('gulp-sass')
jade = require('gulp-jade')
plumber = require('gulp-plumber')
browserSync = require('browser-sync')
del = require('del')
shell = require('gulp-shell')
typescript = require('typescript')
bowerRequireJS = require('bower-requirejs')

paths =
  ts: './src/scripts/*.ts'
  tests: './src/tests/**/*.ts'
  unitTests: './src/tests/unit/*.ts'
  sass: './src/sass/*.sass'
  jade: './src/jade/*.jade'

gulp.task 'ts', ->
  tsResult = gulp.src(paths.ts)
    .pipe(ts
      noImplicitAny: true,
      module: 'amd'
      typescript: typescript
    )
  return tsResult.js.pipe(gulp.dest('build/scripts'))

gulp.task 'test-ts', ->
  tsResult = gulp.src(paths.tests)
  .pipe(ts
      noImplicitAny: true,
      module: 'amd'
      typescript: typescript
  )
  return tsResult.js.pipe(gulp.dest('build/tests/'))

gulp.task 'test', ['test-ts'], shell.task([
  './node_modules/.bin/intern-client config=intern-config/intern.js'
])

gulp.task 'ete', ['build', 'test-ts'], shell.task([
  './node_modules/.bin/intern-runner config=intern-config/intern.js'
])

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
  gulp.watch paths.unitTests, ['test']

gulp.task 'serve', ['build', 'watch'], ->
  browserSync
    server: {baseDir: 'build'}

gulp.task 'clean', ->
  del(['build/*'])

gulp.task 'bower', (done) ->
  options =
    baseUrl: 'build'
    config: 'build/require.config.js'

  bowerRequireJS(options, -> done())