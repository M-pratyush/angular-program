let p="raj";
console.log(p, typeof p)

//Typescript can understand datatype by two way
//        1.Type Inference
//        2.Type Annotation

// 1.Type Inferencen:
// --------------------
// Type inference means it will guess the datatype by value.

// 2.Type Annotation:
//--------------------
//Type annotation means we specify datatype explicitly.

let a:number=10;
// a="raj"
console.log(typeof a)
let b:boolean= true;
let c: undefined= undefined;
let d:null=null;

// Union - what if you want to give multiple datatypes to single variable 
let e:number | string="pratyush"
console.log(e, typeof e)

// declar a variable which accept string or boolean or number ?
let f:number | string | boolean=true;
console.log(f, typeof f)

//Array
let g:number[]=[23,12,40,0,-2]
console.log(g, typeof g)
let h:(number|string|boolean)[]=[12,23,"pratyush",true,12,false]
console.log(h, typeof h)

//What if i want to each element different type --Tuple
let i:[number,string,boolean]=[25,"pra",true]   

//Any - Any will remove tc static typing
let j:any=true;
console.log(j, typeof j)

//enum
//enum is used for constants
enum w{
    sunday,
    monday,
    tuesday,
    thursday,
    friday,
    saturday
};
console.log(w[0])
console.log(w.sunday)

//interface:
interface obj1{
    name:string,
    age:number,
    email:string
}

// Interface is used for object defination. 
let obj:obj1={
    name:"pratyush",
    age:23,
    email:'pratyush@124.com',
}
console.log(obj)

//Cr̥eate an a object whichi can contain username,age and salary
interface str1{
    name:string,
    age:number,
    salary?:number
}
interface str2 extends str1{
    email:string
} 
let str3:str2={
    name:'pratyush',
    age:25,
    salary:2500,
    email:'p@gmail.com'
}
console.log(str3)

class fun implements str2{
    name!:string;
    age!:number;
    email!:string;
}
let y= new fun()
console.log(y)