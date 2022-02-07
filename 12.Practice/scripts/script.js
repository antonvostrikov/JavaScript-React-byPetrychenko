// 1
let filmsCount = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(filmsCount);

//2
let personalMoviesDB = {
    count: filmsCount,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let a = prompt('Один из последних фильмов?', ''),
    b = +prompt('На сколько вы оцените этот фильм?', ''),
    c = prompt('Один из последних фильмов?', ''),
    d = +prompt('На сколько вы оцените этот фильм?', '');

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);
