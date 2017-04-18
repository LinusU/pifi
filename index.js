'use strict'

module.exports = function (fn, promiseModule) {
  const P = promiseModule || Promise

  return new P((resolve, reject) => {
    fn.call(this, (err, result) => err ? reject(err) : resolve(result))
  })
}
