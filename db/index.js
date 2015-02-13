var pfrases;

exports.connect = function () {
  pfrases = require('./ru') ;
};

exports.getPfrase = function (name) {
    if (!pfrases[name]) {
        throw new Error('Нет такой фразы: ' + name );
    }
    return pfrases[name];
};