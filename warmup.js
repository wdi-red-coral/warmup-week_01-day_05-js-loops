/*
Write a function named singSong() that will console.log the song.
*/
const singSong = function (num){
    let bottleW = " bottles of coke on the wall " ; 
    let bottleC = " bottles of coke.\n "; 
    let strPass = " Take one down, pass it around, " ; 
    let noMore = " no more bottles of coke on the wall. no more bottles of coke. "; 
    let backStore = " Go to the store and buy some more, ";
    // to save the original value 
    const originCount =  num;

    while (num >0 ){
        console.log ( num + bottleW + num + bottleC );
        num -=1 ; 
        //her if num equal 0 print to the consol and exit from the loop  
        if(num == 0 ){
            console.log ( noMore);
        }else {
            console.log ( strPass + num + bottleC );
        }
    }
    console.log ( noMore +  "\n" +backStore + originCount  + bottleW);
}

 /* 
    Bonus
    Be able to count between a range 
    of numbers (ie, 200 to 5). singSong(200, 5)
 */

 const singSong = function (maxNum , minNum ){
    let bottleW = " bottles of coke on the wall " ; 
    let bottleC = " bottles of coke.\n "; 
    let strPass = " Take one down, pass it around, " ; 
    let noMore = " no more bottles of coke on the wall. no more bottles of coke. "; 
    let backStore = " Go to the store and buy some more, ";
    // to save the original value 
    const originCount =  maxNum;

    while (maxNum >0 ){
        console.log ( maxNum + bottleW + maxNum + bottleC );
        maxNum -=1 ;
        //her if maxNum equal minNum print to the consol and exit from the loop  
        if(maxNum == minNum ){
            console.log ( noMore);
            break ; 
        }else {
            console.log ( strPass + maxNum + bottleC );
        }
    }
    console.log ( noMore +  "\n" +backStore + originCount  + bottleW);
}
