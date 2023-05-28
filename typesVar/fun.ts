const fun1=(a,b)=>{
    const avalue = a.trim();
    const bvalue=b.trim().toUpperCase();
    const newvalue=avalue +  bvalue;
    return newvalue;
};
const returnvalue=fun1("achal" ,"kharabe");
console.log(returnvalue)

const adduser=(newuser)=>{
    const id:number= Math.random();
    const newDate:any=new Date();
    return{
        name:newuser.name,
        email:newuser.email,
        id:id,
         Date:newDate
    }
};
const userobj={
    name:"achal",
    email:"achal@y.com"
}
const newuser=adduser(userobj);
console.log(newuser);


