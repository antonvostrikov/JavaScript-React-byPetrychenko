/*
let filmsCount = +prompt('Сколько фильмов вы посмотрели?', '');

let personalMoviesDB = {
    count: filmsCount,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

for (let i = 0; i < 2; i++) {
    
    let a = prompt('Какие фильмы вы посмотрели?', ''),
          b = prompt('Какую оценку вы поставите фильму?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 10) {
            personalMoviesDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }

}

if (personalMoviesDB.count < 10) {
    console.log('Просмотрено слишком мало фильмов!'); 
} else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
    console.log('Вы классный кинозритель!');
} else  if (personalMoviesDB.count >= 30) {
    console.log('Вы киноман!');
} else {
    console.log('Произошла ошибка!');
}

console.log(personalMoviesDB);

const a = +prompt('Сколько фильмов вы посмотрели?', '');

const films = {
  	count: a,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let i = 0;
do {
  let b = prompt('Какие фильмы вы посмотрели?', ''),
      c = prompt('Какую оценку фильму вы поставите?', '');
  
  if (b != null && c != null && b != '' && c != '' && b.length < 15) {
    films.movies[b] = c;
    console.log('done');
    i++;
  } else {
    console.log('error');
    i--;
  }
} while (i < 2);


console.log(films);
*/

const a = +prompt('Сколько фильмов вы посмотрели?', '');

const films = {
  	count: a,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let i = 0;
while (i < 2) {
  let b = prompt('Какие фильмы вы посмотрели?', ''),
      c = prompt('Какую оценку фильму вы поставите?', '');
  
  if (b != null && c != null && b != '' && c != '' && b.length < 15) {
    films.movies[b] = c;
    console.log('done');
    i++ ;
  } else {
    console.log('error');
    i--;
  }
} 

console.log(films);