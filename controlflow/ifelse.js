//ifelse  statement

// if(true){
//     console.log(`Hey there`);
// }
// else{
//     console.log(`whats goin on`); 
// }                                   


// <  , > , <= , >= , == , != , ===(checks datatype also)

const score = 45

// if(score==45){
//     let power="high"
//     console.log(`power:${power}`);    //will execute
// }

//console.log(`power:${power}`);   //wont execute cause the varibale define under scope is funtionable in that scope only




//using && (and)
const bookReader=true
const Rarereader=true
const alltypebooks=false

if(bookReader && alltypebooks){
    console.log(`allow to shop any books`);
}
else{
    console.log(`allow to shop only a section books`)
}


//using ||(or)
if(bookReader || Rarereader){
    console.log(`Allow to tale b section book`)
}



