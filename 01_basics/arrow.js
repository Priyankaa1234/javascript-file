// .this is use to refer current context , when we use it we say take the current data
//value of this is window in browser , and here it is empty object 
const user= {
    username:"piyu",
    id:67523,

    welcomeMsg: function(){
        console.log(`${this.username} , welcome to website`)
    }

}
// user.welcomeMsg()
// user.username="priyu"
// user.welcomeMsg()    //display the current updated data







           //********arrow function**********
// const addtwo = (num1 , num2) =>{
//     return num1+num2

// }

const addtwo = (num1 , num2) => (num1+num2)     //implicit return


console.log (addtwo(5,5));