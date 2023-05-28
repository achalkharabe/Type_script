var fun1 = function (a, b) {
    var avalue = a.trim();
    var bvalue = b.trim().toUpperCase();
    var newvalue = avalue + bvalue;
    return newvalue;
};
var returnvalue = fun1("achal", "kharabe");
console.log(returnvalue);
var adduser = function (newuser) {
    var id = Math.random();
    var newDate = new Date();
    return {
        name: newuser.name,
        email: newuser.email,
        id: id,
        Date: newDate
    };
};
var userobj = {
    name: "achal",
    email: "achal@y.com"
};
var newuser = adduser(userobj);
console.log(newuser);
