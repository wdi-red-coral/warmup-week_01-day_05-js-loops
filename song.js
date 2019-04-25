const singSong = function(){
    
    let b;
    for(let i=99;i>=0;i--){
        if(i>=2){
            b=i-1;
            console.log(i+"bottles of coke on the wall," +i+ " bottles of coke.Take one down, pass it around, " +b+" bottles of coke on the wall.");
    }
    else if(i>=1){console.log(i+"bottle of coke on the wall, " +i+" bottle of coke.Take it down and pass it around, no more " +b+"bottles of coke on the wall.");}
    else {console.log( "No more bottles of coke on the wall, no more bottles of coke.Go to the store and buy some more, 99 bottles of coke on the wall.");}
        }
    
}
singSong ()