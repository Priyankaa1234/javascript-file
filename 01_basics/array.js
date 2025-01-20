//array
//resizable , contain mix of diff datatype
const myArray = [1 ,45 ,2 ,3 , "piya"]
const myArr = new Array(1,4,2,7,8)
//console.log(myArray[4]);

myArray.push(4)  //add value
myArray.push(6)
myArray.pop()   //pop last value
myArray.pop(4)  //pop given element
myArray.unshift(9) //add at first
myArray.shift()   //removes the first element

//console.log(myArray);

//console.log(myArray.includes(9));  // check the inclusion
//console.log(myArray.indexOf(4));   //give index of element

const newArr = myArray.join()   //convert into stirngs
//console.log(typeof newArr);

const myn1 = myArray.slice(1 , 3)  //(start,end) gives the elemnt betwen them
console.log(myn1);
console.log("a " , myArray);

const myn2 = myArray.splice(1,3) //(start,end) gives the elemnt between them by removing them from original array
console.log(myn2);
console.log("b " ,myArray);




