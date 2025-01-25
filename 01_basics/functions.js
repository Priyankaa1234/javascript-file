function add(number1,number2){
    // console.log(number1+number2);

    // let result = number1 + number2
    // return result

    return number1 + number2
}
// const result=add(3,5)
// console.log(result);

//console.log(add(4,5));




//taking multiples arguments
//... rest operato
function calculate(...num1) {
    return num1
}
//console.log(calculate(404,23,6578,400));     




//passing object in functions
const user = {
    name:"priyanka",
    id:899
}


function UserName(anyobject){
    console.log(`Username is ${anyobject.name} and id is ${anyobject.id}`);
}
//UserName(user)





//passing array in function

const myArray=[44,600,200,899]

function returnSecondValue (getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myArray));
