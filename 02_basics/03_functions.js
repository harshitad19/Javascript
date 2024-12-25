//fucntion definition
function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    console.log("I");
}

//sayMyName------> reference
// sayMyName();-------->execution with '()'

//function for adding two numbers
function addTwo(number1, number2)//the values passed in fucntions are called PARAMETERS
{
    console.log(number1+number2);
}

// addTwo(3, 4)------->Here when we pass the values to fucntion they are called ARGUMENTS

//return type function

function subtractTwo (number1,number2)
{
    let result=number1-number2
    //console.log("Harshi")----->it will printed in output as it is before return
    return result;
    //console.log("harshi")------>it won't get printed in output as it is after the return
}
const result=subtractTwo(8,4);
// console.log("result:",result);------->result: 4

function loginUserMessage(username="NOT Authorized user"){
    if(username === undefined){
        console.log("please enter a username");
        return
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Harshi"));------->Harshi just logged in
//if no values are passed like 'loginUserMessage()---->then the output will be--> undefined just logged in
//or we can introduce if else block
// console.log(loginUserMessage())------>please enter a username
// undefined

//or we can give default value like 'username="NOT Authorized"---->but then it won"t get in if block

// console.log(loginUserMessage())---------->NOT Authorized user just logged in

//and value will be overwritten if we pass any arguments to function
// console.log(loginUserMessage("Harshi"));--------->Harshi just logged in


//--------------------------------------------------------------------------------------------

//now sometimes we have function in which number of parameters are not fixed ,the problems like shopping cart once the user starts adding items in shopping cart the number of items are not fixed how much the user will add for such problems----

function calculateCartPrice(...num1)//(... is here rest operator)--->it can be both rest and spread operator based on situation
{
    return num1;
}

// console.log(calculateCartPrice(200,400,500))------>[ 200, 400, 500 ]----->here it will return array but if we haven't used rest operator it would have return only first value that is 200

//objects and functions

// const user={
//     username:"Harshi",
//     price:199
// }

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)------>username is Harshi and price is 199

// we can also pass direct object 
handleObject({
    username: "H",
    price: 999
})

//ARRAYS AND FUNCTIONS

const newArray=[200,400,600,800]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(newArray))------->400

//we can directly pass array

// console.log(returnSecondValue([200,300,400,500]))--->300




