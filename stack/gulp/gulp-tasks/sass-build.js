'use strict'

import gulp         from 'gulp'
import gulpSass     from 'gulp-sass'
import runSequence  from 'run-sequence'
// import gulpRename   from 'gulp-rename'

import {errorMsg}   from '../../utils/myChalk'
import appConfig    from '../../config/appConfig'

const {
    globs: {scss: {src, dist, watch}}
} = appConfig

const sassBuild = (src, dist) =>
    gulp.src(src)
        .pipe(gulpSass({
            outputStyle:    'compressed',
            sourceMapEmbed: 'embed'
            // sourceMapRoot:  './web'
        }).on('error', e => gulpSass.logError(errorMsg(e))))
        // .pipe(gulpRename('test.css'))
        .pipe(gulp.dest(dist))

gulp.task('sass:build-mqs', () => sassBuild(src.mqs, dist.mqs))

gulp.task('sass:build-main', () => sassBuild(src.main, dist.main))

gulp.task('sass:watch', () => gulp.watch(watch, ['sass:build-main']))

gulp.task('sass-build', done => {
    runSequence('sass:build-main', done)
})


