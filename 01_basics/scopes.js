function one (){
    const userName="piyaa"

    function two (){
        const website = "youtube"
        console.log(userName);     //can access from parent function
    }
    //console.log(website);     //cannot access from child function//
    two()

}
one()


//same condition in ifelse

if(true) {
    const username="piya"
    if(username==="piya")
    {
        const website="youtube"
        console.log(username);
    }
   // console.log(website);  //cannot access
}

