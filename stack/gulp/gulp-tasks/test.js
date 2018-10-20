import gulp         from 'gulp'
import {debugInfo}  from '../../utils/myChalk'

gulp.task('test', () => {
    let additionalStyledText = '{bgGreen.bold SUCCESS {bgBlack.white (!)}}'
    debugInfo(`it was an ${additionalStyledText} I {reset.bgWhite.red.bold love} it!`)
})
