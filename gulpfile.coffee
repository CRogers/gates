gulp = require('gulp')
ts = require('gulp-typescript')

gulp.task 'ts', ->
  tsResult = gulp.src('src/*.ts')
    .pipe(ts
      noImplicitAny: true,
      out: 'output.js'
    )
  return tsResult.js.pipe(gulp.dest('build'))