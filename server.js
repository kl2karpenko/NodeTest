// module.exports = exports = this;

var db = require('db'),
    User = require('./user');
db.connect();

function run() {
    var petya = new User("Petya");
    var vasya = new User("Vasya");

    vasya.hello(petya);

    console.log(db.getPfrase('Run successful'));
}

// If ths module was loaded by smth
if (module.parent) {
    exports.run = run;
} else {
    run();
}
