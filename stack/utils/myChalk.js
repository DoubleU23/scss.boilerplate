import chalk from 'chalk'

// no arrow function -> preserve context!
const chalkExt = function (parts, ...substitutions) {
    let rawResults      = []
    ,   cookedResults   = []
    ,   chalkParts

    parts.forEach((v, i) => {
        rawResults.push(parts.raw[i])
        cookedResults.push(parts[i])
        if (i < substitutions.length) {
            rawResults.push(substitutions[i])
            cookedResults.push(substitutions[i])
        }
    })
    chalkParts      = [cookedResults.join('')]
    chalkParts.raw  = [rawResults.join('')]

    return chalk(chalkParts)
}

const isDebug = () => process.env.DEBUG === 'true'

const myChalk = {
    /**
     * @function
     * @name  errorMsg
     * @description console.log an ErrorMsg with red backround
     *
     * @param  {string} str - the string to render (may contain chalk-template-strings)
     * @return {null}
     */
    errorMsg:   str => console.log(chalkExt`\n{bgRed {bold [Error]} ${str}}\n`)
    /**
     * @function
     * @name  debugInfo
     * @description console.log an DebugIngo with yellow backround
     *
     * @param  {string} str - the string to render (may contain chalk-template-strings)
     * @return {null}
     */
,   debugInfo:  str => isDebug() && console.log(chalkExt`\n{bgYellow {bold [DEBUG]} ${str}}\n`)
}

export const errorMsg   = myChalk.errorMsg
export const debugInfo  = myChalk.debugInfo

// TBD: fix this syntax!?
// = unexpected token after babel7 upgrade
// export {
//     ...myChalk
// }
// workaround over Object.assign not standard-js compatibel
// module.exports = Object.assign(module.exports, myChalk)

export default myChalk
