 //let myDate = new Date()
//  console.log(myDate);
//  console.log(myDate.toISOString());
//  console.log(myDate.toDateString());
//  console.log(myDate.toJSON());
//  console.log(myDate.toLocaleDateString());
//  console.log(myDate.toLocaleString());
//  console.log(myDate.toTimeString());
//  console.log(myDate.toUTCString());

// console.log(typeof myDate);  //object

// let mycreatedDate = new Date(2025 ,0 , 21)  //declaring own date
// console.log(mycreatedDate.toDateString());



//time

let mycreatedDate = new Date( "01-21-2025" )
//console.log(mycreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));   //convert into seconds

// console.log(mycreatedDate.getDay());
// console.log(mycreatedDate.getMonth()+1);
// console.log(mycreatedDate.getFullYear());

let newDate = new Date()
newDate.toLocaleString('default' ,{
    weekday:"long"
 })
 console.log(newDate.toLocaleString());
 