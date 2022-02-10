// Циклы

let count = 10;

while(count <= 15) {
   console.log(count);
    count++; // от 10 до 15
}

for (let i = 0; i <= 15; i++) {
    console.log(`Отсчет пошел ${i}`); // от 0 до 15
}

let a = 5;

do {
    a++;
    console.log(`Цифры ${a}`); // от 6 до 15
} 
while (a <= 15);

for (let b = 0; b <= 20; b++) {
    console.log(b);
    if (b === 16) {
        break; // прервать на 16
    }
}

let c = 0;

for (let c = 0; c <= 20; c++) {
    console.log(c);
    if (c === 16) {
        continue; // пропустить 16
    }
}