'use strict'

import gulp   from 'gulp'
import yargs  from 'yargs'

const args 	= require('yargs')
	.option('env', {
		alias: 		'e',
		default: 	'development'
	})
	.argv

// TBD: shove yarg settings into own task, OR use config modile instead OR make config task and set env there
// refactor: how to handle settings here? maybe config module would be overkill - decide at later stage

/**
 * task 'env'
 *     sets NODE_ENV
 */
gulp.task('set-env', () => {
    process.env.NODE_ENV = args.env || process.env.NODE_ENV || 'development'
})
