/*var x=15;
{
    let x=5;
    console.log(x);
}
console.log(x);

{
    const x=5;
    console.log(x);
    x=6;
    console.log(x);
}
var x=function(x,y){
    return x+y
};
console.log(x(5,6));
const x=(x,y)=>{
    return x+y
}
console.log(x(5,6));
const x=(x,y)=>x+y;
console.log(x(5,6));

const q1=["jan","feb","march"];
const q2=["apr","may","jun"];
const q3=["jul","aug","sep"];
const q4=["oct","nov","dec"];
const year=[...q1,...q2,...q3,...q4];
console.log(year);
const mynum=[25,12,50,77,-1];
let maxvalue=Math.max(...mynum);
console.log(maxvalue);
const mynum=[25,12,50,77,-1];
let sum=0;
for(let num of mynum){
    sum=sum+num;
}
console.log(sum);
const name="cipherschools";
let text="";
for(let ch of name){
    text+=ch+" ";
}
console.log(text);
const fruits=new Map([
    ["apples",500],
    ["bananas",300],
    ["oranges",200],
]);
console.log(fruits);
console.log(fruits.get("oranges"));

const letters=new Set();
letters.add("a");
letters.add("b");
letters.add("a");
console.log(letters);

class car{
    constructor(name,mfgyear){
        this.name=name;
        this.mfgyear=mfgyear;
    }
}
const mycar1=new car("Mercedes",2022);
const mycar2=new car("porsche",2020);
console.log(mycar1,mycar2);

const myfunction= () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("this is inside promise");
            resolve();
        },2000);
    });
};
myfunction()
.then(()=>{
    console.log("Resolved");
})
.catch(()=>{
    console.error("Rejected");

});

const person={
    firstname: "John",
    lastname: "Doe",
    age:30,
    eyecolor:"blue",
};
let id=Symbol("id");
person[id]=140111;
console.log(person);

const addTwoNumbers=(a,b=10)=>a+b;
console.log(addTwoNumbers(10));*/

const addnumbers=(...args)=>{
    let sum=0;
    for(let arg of args){
        sum+=arg;
    }
    return sum;
};
console.log(addnumbers(10,14,16,22,1,45));



