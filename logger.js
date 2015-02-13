//var log = require('logger')(module);

module.exports = function (module) {
    var args = [module.filename].concat([].slice.call(arguments));

    return function () {
        console.log.apply(console,args)
    }
};