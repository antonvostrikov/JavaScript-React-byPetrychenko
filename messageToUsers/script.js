// Общение с пользователем

// alert('Сообщение пользователю!');

// const result = confirm('Ты здесь?');
// console.log(result); 

//  const answer = prompt('Вам есть 18?', '18');
// console.log(answer);

// Преобразование данных к числу - оператор "+"

/*
const answers = [];

for (let i = 0; i < 3; i++ ) {
    answers.push(+prompt('Запишите числа', ''));
}

for (let item of answers) {
    console.log(item);
}

*/

const aboutPerson = []
aboutPerson[0] = prompt('Сколько вам лет?', '')
aboutPerson[1]  = prompt('Как вас зовут?', '')
aboutPerson[2] = prompt('Ваша должность?', '')

console.log(aboutPerson);