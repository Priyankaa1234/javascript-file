//for of loop

const arr =[1,2,3,4,5,6]

for (const num of arr) {
    //console.log(num);   
}



//map , is a object holds the value in key order pair , remembers the original insertion order
// no duplicate values
const map = new Map()
map.set('IN',"India")
map.set('SA',"South Africa")
map.set('Fr',"France")

//console.log(map);



//for of loop on map
for (const [key , value] of map) {
    // console.log(key , ':-' , value);    
}




// for each loop

const coding =["js","ruby","java"]

coding.forEach( function (item){
    //console.log(item);
})



//object in array

const mycoding=[
    {
        langName:"javascript",
        fileName:'js'
    },
    {
        langName:"Python",
        fileName:'py'
    },
    {
        langName:"CSS",
        fileName:'css'
    },
]


mycoding.forEach( (item) => {
    console.log(item.langName);
    
})