// Функции

someFunc();

function someFunc() {

} // Function Declaration - можно вызвать до объявления 

let anotherFunc = function() {

};  // Function Expression - вызов строго после объявления. Создается только тогда, когда до нее доходит код.

anotherFunc();

let calc = (a, b) => { return a + b }; // Стрелочная функция. Не имеет контекста.