let score="33abs"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber =Number(score) //conversion of string to number 
console.log(typeof valueInNumber);
console.log(valueInNumber) //output will be NaN(not a number) if user enter text like 33abc because it is not a number hence it won't convert it into number

//"33"=33
// "33abc"=NaN
//true->1
//false->0


let Logged= 1

let booleanidLoggedIn=Boolean(Logged);
console.log(typeof(booleanidLoggedIn));
console.log(booleanidLoggedIn);

//1->true
//""->false
//"molu"->true

let someNumber =555

let stringNumber=String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber);

