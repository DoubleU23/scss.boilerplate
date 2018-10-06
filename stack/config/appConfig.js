export default (function(config) {
    const rootRel   = '../../'

    const paths = {
        src:    rootRel + 'web/src/',
        dist:   rootRel + 'web/dist/'
    }

    config      = Object.assign({
        paths,
        globs: {
            scss:   {
                dist:   paths.dist + 'scss/',
                src:    [
                    paths.src + 'full.scss',
                    paths.src + 'mq/*.scss'
                ]
            }
        }
    }, config) // assign process.env.APP_CONFIG to defaults

    return config
})(process.env.APP_CONFIG || {})
