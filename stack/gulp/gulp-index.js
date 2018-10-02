'use strict'

import gulp         from 'gulp'
import runSequence  from 'run-sequence'
// import gulpTaskListing from 'gulp-task-list'
import path         from 'path'
import fs           from 'fs'

// GET TASK FILES
const taskFiles = fs.readdirSync('./stack/gulp/gulp-tasks/').filter(name =>
    //  filter files per file-extension
    //  prevent accidental inclusion of possible dot files, fixtures, etc.
        /(\.(js|coffee)$)/i.test(path.extname(name))
    )

// SET THE ENVIRONMENT VARIABLES (mainly NODE_ENV)
// run config before importing/requiring the other tasks
// because they import appConfig which depends on config-module
require('./gulp-tasks/set-env.js')
runSequence('set-env') // = sets NODE_ENV based on --env


// IMPORT TASK FILES
taskFiles.forEach(taskFile => {
    require('./gulp-tasks/' + taskFile)
})

// TBD: gulp task list
//
// require('gulp-task-list')(gulp, null, [__filename, ...tasks.map(filename => 'gulp/tasks/' + filename)])
// gulp.task('default', cb => runSequence('task-list'))

gulp.task('default', done => {
    const gulpSequence = [
        'set-env'
    // ,   'clean'
    // ,   'compile'
    ]

    // if (process.env.NODE_ENV !== 'development') {
    //     gulpSequence.push('WHATEVER')
    // }

    runSequence(...gulpSequence, done)
})
