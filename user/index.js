// module.exports = exports = this;

var db = require('db'),
    log = require('logger')(module);

function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    console.log(db.getPfrase('Hello') + ", " + who.name);
};

//console.log('user is required');

// exports
module.exports = User;
// e.g. =  this.User = User;

// global - global var
//global.User = User;


//

//console.log(module);