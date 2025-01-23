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


//singleton object

//const appUser = new Object()  //singleton object
//const appUser={}      //nonsingleton



//creating objects in objects
const appUser2={
    name: "priyanka",
    Id: 23009 ,
    emails : {
        insta:"pvlogs@gmail.com", 
        eduEmail: {
            yt:"priyanka@gmail.com ",
            linkden: "piya@gmail.com"
        }
    }

}
//console.log(appUser2.emails);
//console.log(appUser2.emails.eduEmail.linkden);




    //merging objects
const obj1= {
    1:"p",
    2:"k"
}
const obj2= {
    3:"p",
    4:"k"
}
const obj3= {
    5:"p",
    6:"k"
}

//const obj4 = Object.assign({}, obj1,obj2,obj3);    //method 1 to call
const obj4 = {...obj1,...obj2,...obj3};              //method 2
console.log(obj4)