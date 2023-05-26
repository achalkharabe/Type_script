console.log("hii");
var fun1 = function () {
    var a = 12;
    var b = 3;
    var add = a + (b.toString());
    var sub = a - b;
    var multy = a * b;
    var dev = a / b;
    console.log(add);
    console.log(sub);
    console.log(multy);
    console.log(dev);
};
fun1();
var fun2 = function () {
    var a = "1";
    var b = 2;
    //let c=parseInt(a)+b;
    var c = a + b;
    console.log(c);
    return c;
};
var returnfun = fun2();
console.log("returnfun", returnfun);
