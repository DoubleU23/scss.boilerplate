'use strict'

import gulp      from 'gulp'
import del       from 'del'

// TBD: global config file
// refactor: get glob/DIR from global config
gulp.task('clean', () => del(['dist/**/*']))
