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
