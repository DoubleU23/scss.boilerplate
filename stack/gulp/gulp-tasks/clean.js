'use strict'

import gulp      from 'gulp'
import del       from 'del'

import appConfig from '../../config/appConfig'

const {globs: {clean}} = appConfig

// TBD: global config file
// refactor: get glob/DIR from global config
gulp.task('clean', () => del(clean))
