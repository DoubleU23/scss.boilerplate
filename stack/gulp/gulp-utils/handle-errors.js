'use strict'

import gulpNotify from 'gulp-notify0'

export default function (error) {
    if (!global.isProd) {
        let args = Array.prototype.slice.call(arguments)

        // Send error to notification center with gulp-notify
        gulpNotify.onError({
            title: 'Compile Error',
            message: '<%= error.message %>'
        }).apply(this, args)

        // Keep gulp from hanging on this task
        this.emit('end')
    }
    else {
    // Log the error and stop the process
    // to prevent broken code from building
        console.log(error)
        process.exit(1)
    }
}
