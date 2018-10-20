'use strict'

import path         from 'path'
import fs           from 'fs'
import gulp         from 'gulp'
import runSequence  from 'run-sequence'
// import gulpTaskListing from 'gulp-task-list'


// GET TASK FILES
const taskFiles = fs.readdirSync('./stack/gulp/gulp-tasks/')
    .filter(name =>
    //  filter files per file-extension
    //  prevent accidental inclusion of possible dot files, fixtures, etc.
        /(\.(js|coffee)$)/i.test(path.extname(name))
    )

// load user args, default params, NODE_ENV, ...
const userArgs = require('./gulp-tasks/user-arguments')
runSequence('user-arguments')

// IMPORT TASK FILES
taskFiles.forEach(taskFile => {
    require('./gulp-tasks/' + taskFile)
})

gulp.task('default', done => {
    const gulpSequence = [
        'user-arguments',
        'clean',
        'sass-build',
        'sass:watch'
    ]

    if (userArgs.style !== 'compact') {
    // gulpSequence.push('sass:uglify')
    }

    runSequence(...gulpSequence, done)
})

