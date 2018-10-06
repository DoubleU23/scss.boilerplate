'use strict'

import gulp         from 'gulp'
// import gulpSass     from 'gulp-sass'

import appConfig    from '../../config/appConfig'

let {globs: {scss: {src, dist}} = appConfig

// gulp.task('sass:build', done => gulp
//     .src(src)
//     .pipe(gulpSass().on('error', gulpSass.logError))
//     .pipe(gulp.dest(dist))
// )
