"use strict";
let p = "raj";
console.log(p, typeof p);
//Typescript can understand datatype by two way
//        1.Type Inference
//        2.Type Annotation
// 1.Type Inferencen:
// --------------------
// Type inference means it will guess the datatype by value.
// 2.Type Annotation:
//--------------------
//Type annotation means we specify datatype explicitly.
let a = 10;
// a="raj"
console.log(typeof a);
let b = true;
let c = undefined;
let d = null;
// Union - what if you want to give multiple datatypes to single variable 
let e = "pratyush";
console.log(e, typeof e);
// declar a variable which accept string or boolean or number ?
let f = true;
console.log(f, typeof f);
//Array
let g = [23, 12, 40, 0, -2];
console.log(g, typeof g);
let h = [12, 23, "pratyush", true, 12, false];
console.log(h, typeof h);
//What if i want to each element different type --Tuple
let i = [25, "pra", true];
//Any - Any will remove tc static typing
let j = true;
console.log(j, typeof j);
//enum
//enum is used for constants
var w;
(function (w) {
    w[w["sunday"] = 0] = "sunday";
    w[w["monday"] = 1] = "monday";
    w[w["tuesday"] = 2] = "tuesday";
    w[w["thursday"] = 3] = "thursday";
    w[w["friday"] = 4] = "friday";
    w[w["saturday"] = 5] = "saturday";
})(w || (w = {}));
;
console.log(w[0]);
console.log(w.sunday);
// Interface is used for object defination. 
let obj = {
    name: "pratyush",
    age: 23,
    email: 'pratyush@124.com',
};
console.log(obj);
let str3 = {
    name: 'pratyush',
    age: 25,
    salary: 2500,
    email: 'p@gmail.com'
};
console.log(str3);
class fun {
}
let y = new fun();
console.log(y);
