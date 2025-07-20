//for loop

// for (let i  = 0; i<=10; index ++) {
//     const element = index;
//     console.log(element);
    
    
// }
//console.log(element);   //cannot access outside the scope

// for (let i = 0; i <=10; i++) {
//     console.log(`Outer Loop value: ${i}`);
    
//    for (let j = 0; j <=10; j++) {
//     console.log(`${i} * ${j} = ${i*j}`);
    
   
//    }
    
// }



//break and continue

// for (let index = 1; index <=20; index++) {
//     if(index==5){
//         console.log(`No. 5 detected`);
//         break                                   //detect the condition and break the loop
        
//     }
//     console.log(`value is ${index}`);
    
    
// }

for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log(`No. 5 detected`);
        continue                                //skip the condition and continiue the loop
        
    }
    console.log(`value is ${index}`);
    
    
}