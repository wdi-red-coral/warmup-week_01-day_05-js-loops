/*5 bottles of coke on the wall, 5 bottles of coke.
Take one down, pass it around, 4 bottles of coke on the wall. 
4 bottles of coke on the wall, 4 bottles of coke.
Take one down, pass it around, 3 bottles of coke on the wall. 
3 bottles of coke on the wall, 3 bottles of coke.
Take one down, pass it around, 2 bottles of coke on the wall.


2 bottles of coke on the wall, 2 bottles of coke.
Take one down, pass it around, 1 bottles of coke on the wall. 
1 bottles of coke on the wall, 1 bottles of coke.
Take one down, pass it around, no bottles of coke on the wall. 
No more bottles of coke on the wall, No more bottles of coke.
Take one down, pass it around, 5 bottles of coke on the wall.
*/

const singSong = function ( bNum , sNum)
{
 let firstNum =0 , secondNum =0;
    
    for( i=bNum ; i>=sNum ;i--)
    {
        firstNum = i;   
        secondNum =i-1;
        if (i > 2){
            console.log(firstNum+" bottles of coke on the wall, "+firstNum+
            " bottles of coke. Take one down, pass it around, "+
            secondNum+" bottles of coke on the wall.");
        }
        else 
        {
            if(i==2)
                    console.log(firstNum+" bottles of coke on the wall, "+firstNum+
                    " bottles of coke.Take it down and pass it around, "+secondNum+
                    " bottle of coke on the wall.");
            else if(i==1)
                    console.log(firstNum+" bottle of coke on the wall, "+firstNum+
                    " bottle of coke.Take it down, pass it around, no more bottles of coke on the wall.");
            else 
                console.log("No more bottles of coke on the wall, No more bottles of coke. Go to the store and buy some more, "+bNum+" bottles of coke on the wall.");
        }

    }
}