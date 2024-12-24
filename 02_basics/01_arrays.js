//declaring an array

const myArr=[0,1,2,3,4,5]

// console.log(myArr);---------->[ 0, 1, 2, 3, 4, 5 ]


//accessing array elements using 0-indexing
// console.log(myArr[0]);----------->0


//another way of declaring an array
const myArr2= new Array(1,2,3,4,5);
// console.log(myArr2);------------->[ 1, 2, 3, 4, 5 ]

//Array methods

myArr.push(9);
// console.log(myArr);--------------->[
//   0, 1, 2, 3,
//   4, 5, 9
// ]

myArr.pop();
// console.log(myArr);---------------->[ 0, 1, 2, 3, 4, 5 ]------> as we added 9 now using pop it get removed

myArr.unshift(9); // adding element at front
// console.log(myArr);----------------->[
//   9, 0, 1, 2,
//   3, 4, 5
// ]

myArr.shift();// remove element from front
// console.log(myArr);------------------>[ 0, 1, 2, 3, 4, 5 ]

const marvelHeroes=["thor","ironman","captainAmerica"]
const dc_heroes=["flash","batman"]

// marvelHeroes.push(dc_heroes)--->this works on actual array and save changes on actual array and it do not take values as string it takes even array as a value

// console.log(marvelHeroes);----------->[ 'thor', 'ironman', 'captainAmerica', [ 'flash', 'batman' ] ]

//now if we want to concat two arrays without changing datatype

const allHeroes=marvelHeroes.concat(dc_heroes);//this we need to store in new variable because "concat " do not make changes to real array so if we print it will only show marvelHeroes values

// console.log(allHeroes);------------->[ 'thor', 'ironman', 'captainAmerica', 'flash', 'batman' ]

//another way of concatenation of two strings
//spread(eg. you drop the glass it will shatter and spread everywhere)

const all_new_heroes=[...marvelHeroes,...dc_heroes]
// console.log(all_new_heroes);----------->[ 'thor', 'ironman', 'captainAmerica', 'flash', 'batman' ]

//-------------------------------------------------------------------------------------------------------------

const anotherArray=[1,2,3,[4,5],6,7,[8,9]]//situation where we have array inside an array------>we use flat function

const real_anotherArray=anotherArray.flat(Infinity)
// console.log(real_anotherArray);----------->[
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ]


// -------------------------------------------------------------------------------------------------------------

// 






