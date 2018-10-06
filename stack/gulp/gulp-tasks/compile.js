'use strict'

import gulp         from 'gulp'
import gulpSass     from 'gulp-sass'

gulp.task('compile', done => gulp.src('./sass/**/*.scss')
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(gulp.dest('./css'))
)

// gulp.task('sass:watch', function () {
//     gulp.watch('./sass/**/*.scss', ['sass']);
// });
