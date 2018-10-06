export default (function (config) {
    const rootRel   = process.cwd() + '/'

    const paths = {
        src:    rootRel + 'web/src/',
        dist:   rootRel + 'web/dist/'
    }

    config      = Object.assign({
        paths,
        globs: {
            clean:  [
                '!**/.gitkeep', 'stack/__test__/**/*', 'web/dist/**/*'
            ],
            scss:   {
                watch:      paths.src + '**/*.scss',
                src:    {
                    main:   paths.src + 'full.scss',
                    mqs:    paths.src + 'mqs/*.scss'
                },
                dist:   {
                    main:   paths.dist + 'css/',
                    mqs:    paths.dist + 'css/mqs/'
                }
            }
        }
    }, config) // assign process.env.APP_CONFIG to defaults

    return config
})(process.env.APP_CONFIG || {})
