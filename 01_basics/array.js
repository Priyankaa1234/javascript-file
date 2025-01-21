//array
//resizable , contain mix of diff datatype
//const myArray = [1 ,45 ,2 ,3 , "piya"]
//const myArr = new Array(1,4,2,7,8)
//console.log(myArray[4]);

// myArray.push(4)  //add value
// myArray.push(6)
// myArray.pop()   //pop last value
// myArray.pop(4)  //pop given element
// myArray.unshift(9) //add at first
// myArray.shift()   //removes the first element

//console.log(myArray);

//console.log(myArray.includes(9));  // check the inclusion
//console.log(myArray.indexOf(4));   //give index of element

//const newArr = myArray.join()   //convert into stirngs
//console.log(typeof newArr);

// const myn1 = myArray.slice(1 , 3)  //(start,end) gives the elemnt betwen them
// //console.log(myn1);
// //console.log("a " , myArray);

// const myn2 = myArray.splice(1,3) //(start,end) gives the elemnt between them by removing them from original array
// // console.log(myn2);
// // console.log("b " ,myArray);



//       //merge 2 arrays  METHOD 1
// const car1=["rolls royce" , "audi" , "jaquar" , "ferrari"]
// const bike1 = ["hunter" , "meteor" , "bullet" , "avangers"]

// //const collection = car1.concat(bike1)  
// //console.log(collection);

//     //METHOD 2  more prefarable
// const collection = [...car1,...bike1]
// //console.log(collection);


    //array in arrray concet
const arrInarr = [3,4,8,[5,7,] ,6,1,8,9,[3,8,5,6,[3,1,6,3,]]]

const arrInarr1 = arrInarr.flat(Infinity);     //simplyfy in one array
//console.log(arrInarr1);





console.log(Array.isArray("piya"));  //check wheather array or not
console.log(Array.from("piya"));  //converted in array


const score1 = 100
const score2 = 300
const score3 = 400
const score4 = 500
console.log(Array.of(score1,score2,score3,score4));   // convert the values in array
