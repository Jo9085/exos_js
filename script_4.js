const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];



/*----------------*/

  console.log(`Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70`);

  function born70 (array){
    return array.year > 1969 && array.year < 1980
  }

  console.log(entrepreneurs.filter(born70))

/*----------------*/

 console.log(`Sors une array qui contient le prénom et le nom des entrepreneurs`)
 
 let names = []

 for(count=0; count<entrepreneurs.length; count++) {
    names[count] = {first_name: entrepreneurs[count].first, last_name: entrepreneurs[count].last}
 }

 console.log(names)

 /*----------------*/

 console.log(`Quel âge aurait chaque inventeur aujourd'hui ?`)

 for(count=0; count<entrepreneurs.length; count++) {
    entrepreneurs[count].actual_age = 2023 - entrepreneurs[count].year
 }

 console.log(entrepreneurs);

 /*----------------*/

 console.log(`Trie les entrepreneurs par ordre alphabétique du nom de famille.`)

 function compare( a, b ) {
    if ( a.last < b.last ){
      return -1;
    }
    if ( a.last > b.last ){
      return 1;
    }
    return 0;
  }

 console.log(entrepreneurs.sort(compare));
