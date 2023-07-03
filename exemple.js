// const counter=()=>{
//   let num = 10
//   return function (){
//     num>0?console.log(num--):console.log('Ну всё хорош')}
// }
// let newCounter = counter()
// newCounter()
// newCounter()
// newCounter()
// newCounter()
// newCounter()
// newCounter()
// newCounter()
// newCounter()
// newCounter()
// newCounter()
// newCounter()
// newCounter()
// newCounter()
// newCounter()
// let counter = 0;
//
// function test() {
//   return function() {
//     console.log(counter);
//     counter++;
//   };
// };
//
// let func = test;
//
// let func1 = func();
// let func2 = func();
// func1();
// func2();
// func1();
// func2();
// const P_S_Square=(a)=>{
//   return 'P = ' + a*4+ ' ' + 'S = ' + a**2
// }
// console.log(P_S_Square(14354))
// const P_S_Figura=(a,b)=>{
//   return(
//   `P = ${(a+b)*2},
//   S = ${(a+b)**2}`)
// }
// console.log(P_S_Figura(2,3))
// !function() {
//   console.log('!');
// }();
// let result = function() {
//   return 'Hello';
// }();
//
// console.log(result)
// let result = function() {return 1;}()
//   + function() {return 2;}();
// console.log(result);
// let result = (function() {
//   return '!';
// }());
//
// console.log(result)
// let result = (function() {
//   return '!';
// });
//
// console.log(result());
// console.log((function(){
//   return function (){
//     return(function (){
//       return '!'
//     })
//   }
// })()()())
// console.log((function (num1){
//   return function (num2){
//     return function (num3){
//       return num1 + ',' + num2 + ',' + num3
//     }
//   }
// })(1)(2)(3))
// let func = (function() {
//   let num = 0;
//
//   return function() {
//     num++;
//     console.log(num);
//   }
// })();
// func()
// func()
// func()
// function counter(){
//   let num = 0
//  return function (){
//     if(num<5) {
//       num++
//       console.log(num)
//     }else{ num=0}
//   }
// }
// let test = counter()
// test()
// function sum(a){
//   return a**2
// }
// const arr = [2,4,5,6]
// function sqrt(array, funSum){
//   for (const element of array) {
//     console.log(funSum(element))
//   }
// }
// sqrt(arr,sum)
// fun()
// function fun(){
//   console.log('Hello')
// }
//
// let fun1 =function (){
//   console.log('byby')
// }
// fun1()
// test()
// func()
// let test = function func() {
//   console.log('!');
// }
// console.log(
//   function func() {
//     console.log('!');
//   }
// );
// function func() {
//   console.log('!');
// }
// func()
// let obj = {
//   func1: function() {console.log(1)},
//   func2: function() {console.log(2)},
//   func3: function() {console.log(3)},
// };
//
// obj.func1()
// for (const objKey in obj) {
//   console.log(obj[objKey])
// }
// let math = {
//   square: function(num) {return num * num},
//   cube: function(num) {return num * num * num},
// };
// console.log(math.square(2))
// console.log(math.cube(3))
// let fun1 = function (){
//   return 1
// }
// let fun2 = function (){
//   return 100
// }
// function sum(a,b){
//   return a()+b()
// }
//
// console.log(sum(fun1,fun2))
// cube(function(num) {
//   return num * num;
// });
//  function cube(fun){
//   console.log(fun(3))
// }
// function ex(num, fun){
//   console.log(num**fun(5))
// }
// ex(3,function(num){return num })
// const sum=(arr, fun)=>{
//   for (const arrElement of arr) {
//     fun(arrElement)
//   }
// }
// sum([2,4,5,6], function (num){
//   console.log(num**2)})
// const func=(num1,num2)=>{
//   function square(num){
//     return num**2
//   }
//
//   console.log(square(num1)+square(num2))
// }
// func(5,6)
// function counter(){
//   let num = 1
//   return function (){
//     return num++
//   }
// }
// let ready =counter()
// // console.log(ready())
// // console.log(ready())
// // console.log(ready())
// // console.log(ready())
// // console.log(ready())
// // console.log(ready())
// console.log(counter()())
// console.log(counter()())
// console.log(counter()())
// console.log(counter()())
// console.log(counter()())
// console.log(counter()())
//   let num = 1
// function counter(){
//   console.log(num)
//   return function (){
//     return num++
//   }()}
//
// counter()
// counter()
// counter()
// counter()
// +function call(){
//   console.log('hello')
// }()
// console.log(counter)
// let sum = 1 + function(){return 2}()
// console.log(sum)
// let func = (function (){
//   let num = 1
//   return function (){
//     console.log(num++)
//   }
// })()
// func()
// func()
// func()
// func()
// func()
// function findNextSquare(sq) {
//   // Return the next square if sq is a perfect square, -1 otherwise
//     let around = Math.ceil(Math.sqrt(sq))
//   if(Math.ceil(Math.sqrt(sq))===Math.sqrt(sq))
//     return (around + 1)**2
//   else return -1
// }
//
// console.log(findNextSquare(144))
// const findNextSquare=(sq) => Math.sqrt(sq)%1?-1:Math.pow(Math.sqrt(sq)+1,2)
// console.log(findNextSquare(196))
// let result = every([1, 2, 3, 4, 5], function(elem) {
//   if (elem > 0) {
//     return true;
//   } else {
//     return false;
//   }
// });
// let eva=(elem)=> elem>0
// let res = every([1, 2, 3, 4, 5],elem=>elem>0)
// let result = every([1, 2, 3, 4, 5], function(elem, index) {
//   if (elem * index > 10) {
//     return true;
//   } else {
//     return false;
//   }
// });
// let result = every([1, 2, 3, 4, 5], (elem, index)=>(elem * index > 10));
// let i =1
// const recurs=()=>{
//   console.log(i)
//   i+=10
//   if(i<=100){
//     recurs()
//   }
// }
// recurs()
// const fun1=(arr)=>{
//   console.log(arr.shift(),arr)
//   if (arr.length!==0){
//     fun1(arr)
//   }
// }
// fun1([1,2,3,4])
// const fun1=(arr=[1,2,3,4])=>{
//   console.log(arr.pop())
//   if(arr.length!==0){
//     fun1(arr)
//   }
// }
// fun1()
// let res =0
// const sum=(arr=[2,4,6,4])=>{
//   for (const number of arr) {
//     console.log(number)
//    res+= number**2
//   }
// }
// sum()
// console.log(res)
// function func(arr) {
//   for (let elem of arr) {
//     if (typeof elem == 'object') {
//       func(elem);
//     } else {
//       console.log(elem);
//     }
//   }
// }
//
// func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);
// let object ={a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
// const primitive=(obj=object)=>{
//   for (const key in obj) {
//     if(typeof obj[key]==='object') {
//       primitive(obj[key])
//     }else{
//       console.log(obj[key])}
//   }
// }
// primitive()
// function func(arr) {
//   let sum = 0;
//
//   for (let elem of arr) {
//     if (typeof elem == 'object') {
//       sum += func(elem);
//     } else {
//       sum += elem;
//     }
//   }
//
//   return sum;
// }
//
// console.log(func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]));
// let object = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
// let sum = 0
// const sumPrim=(obj=object)=>{
//   for (const key in obj) {
//     if(typeof obj[key]==='object'){
//       sumPrim(obj[key])
//     }else{
//       sum+=obj[key]
//     }
//   }
// }
// sumPrim()
// console.log(sum)
let array = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]]
let sum = 0
const fun1=(arr=array)=>{
  for (const elem of arr) {
    if(typeof elem==='object'){
      sum += fun1(elem)
    }else{sum+=elem}
  }
  return sum
}
let totalSum = fun1()
console.log(totalSum)
// function func(arr) {
//   let sum = 0;
//
//   for (let elem of arr) {
//     if (typeof elem == 'object') {
//       sum += func(elem);
//     } else {
//       sum += elem;
//     }
//   }
//
//   return sum;
// }
//
// console.log(func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]));
