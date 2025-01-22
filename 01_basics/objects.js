//objects are declare in literal or constructor
//singleton made with constructor
// in objects key and values are define

//object literal

 const mySym = Symbol("key1")  // symbol created


const user={
    name:"piya",
    age:20,
    location:"kolhapur",
    lastLogInDays:["mon","wed"],
    [mySym]:"mykey1"            //syntax of declaring symbol
}
//how to accsess
//console.log(user.name)
// console.log(user["name"])
// console.log(user[mySym])
// console.log(user["age"])
//console.log(user);


//changing values
user.age="21"
//console.log(user["age"])

//lock values
Object.freeze(user)