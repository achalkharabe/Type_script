console.log("hii");

const fun1=()=>{
const a:number=12;
let b:number=3;
 const add:string=a+(b.toString())

 const sub=a-b;
 const multy=a*b;
 const dev=a/b;
console.log (add);
console.log (sub);
console.log (multy);
console.log (dev);
}
fun1();
const fun2=()=>{
let a:string="1";
let b:number=2;
//let c=parseInt(a)+b;
let c=a+b;
console.log(c);
return c;
}
const returnfun=fun2();
console.log("returnfun",returnfun);

