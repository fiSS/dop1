'use strict';
let num = 33721;
num=num+"";
num = num[0]*num[1]*num[2]*num[3]*num[4];
console.log (num);
num = (num**3);
num = num+"";
console.log(typeof num);
document.write(num[0],' И ', num[1]);



//ОБЪЕКТЫ
// let options = {
//     width: 1024,
//     heigh: 1024,
//     name: "test"
// };

// console.log(options.name);
// options.bool = false;
// options.color = {
//     border: "black",
//     bg: "red"
// };
// delete options.bool;
// console.log (options);
// for (let key in options ) {
//     console.log('свойство ' + key + ' имеет значение ' + options[key]);
// };
// console.log(Object.keys(options).length);

// //массивы
// let arr = ["first", 2, 3, "four", 5];
// // for (let i = 0; i < arr.length; i++) {
// //     console.log [i];
// // }
// arr.forEach(function(item, i, mass) {
//     console.log(i + ': ' + item + " (массив: " + mass +')');
// });
// console.log(arr);

// FOR IN мы получаем ключ 
// let mass = [1,3,4,6,7];

// for (let key in mass) {
//     console.log(key);
// }

// FOR OFF мы получаем значение
// let mass = [1,3,4,6,7];

// for (let key of mass) {
//     console.log(key);
// }

//метод SPLIT
// let ans = prompt ("", ""),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

//метод JOIN, бывает нужно взять массив и отправить одной строкой
// let arr = ["qqqq", "wwwww", "eeeee", "eswfdsggfdsgg"],
// i = arr.join(', ');
// console.log(arr);
// console.log(i);

//SORT все елементы массива выстраиваются по порядку, работает со СТРОКАМИ, если будут цифры, то приведет к проблемам
// let arr = ["zzz", "aaa", "bbb", "fffff"],
//     i = arr.sort();
//     console.log(arr);

//SORT работа с цифрами
// let arr = [1000000,1, 15, 4, 456],
// i = arr.sort(compareNum);

// function compareNum(a,b) {
//     return a-b;
// } 

// console.log(arr);

//объектно ориетированное програмирование
// let soldier = {
//     health: 500,
//     armor: 400,
//     exp  : 250
// };
// let john = {
//     healh:400
// };
// john.__proto__ = soldier;
// console.log(john);
// console.log(john.exp);
