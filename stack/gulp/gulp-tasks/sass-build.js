'use strict'

import gulp         from 'gulp'
import gulpSass     from 'gulp-sass'
import runSequence  from 'run-sequence'
// import gulpRename   from 'gulp-rename'

import c            from '../../utils/myChalk'
import appConfig    from '../../config/appConfig'

const {
    globs: {scss: {src, dist, watch}}
} = appConfig

const sassBuild = (src, dist, done) => {
    gulp
        .src(src)
        .pipe(gulpSass({
            outputStyle:    'compressed',
            sourceMapEmbed: 'embed'
            // sourceMapRoot:  './web'
        }).on('error', gulpSass.logError))
        // .pipe(gulpRename('test.css'))
        .pipe(gulp.dest(dist))

    done()
}

gulp.task('sass:build-mqs', done => {
    sassBuild(src.mqs, dist.mqs, done)
})

gulp.task('sass:build-main', done => {
    sassBuild(src.main, dist.main, done)
})

gulp.task('sass:build', done => {
    runSequence('sass:build-main', done)
})

gulp.task('sass:watch', done => {
    return gulp.watch(watch, ['sass:build-main'])
})
