/*  Типы данных

1) Числа
2) Строки
3) Boolean 
4) Null
5)Undefined
6)Symbol
7)BigInt
8) Объекты

*/

let number = 33; // Число
let msg = 'Something'; // Строка
let bool = true; // bolean 
console.log(person); // Null - не существует 
let smth; 
console.log(smth); // undefined - нет значения 
console.log('something' + 44); // NaN - not a number
let inf = 4/0; // Infinity

const obj = {
    name: 'Tony',
    age: 20,
    isMarried: false
}; // объект. Внутри свойства и методы

console.log(obj.name); // Tony
console.log(obj['name']); // Tony

let array = []; // Массив - не является отдельным типом данных 