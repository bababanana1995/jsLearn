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
