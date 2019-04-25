
    const singSong = function () {

        for (let i = 99; i>0; i--) {
    
            if  (i === -1) {
                break;
            }
            if (i < 2) {
                console.log(i+' bottles of coke on the wall, 1 bottles of coke.');
                console.log('Take it down and pass it around, no more bottles of coke on the wall.');
                console.log(' No more bottles of coke on the wall, no more bottles of coke.');
                console.log('Go to the store and buy some more, no more bottles of coke on the wall.');
            }
    
            else {
            console.log (i+' bottles of coke on the wall,' + i +' bottles of coke.');
            console.log('Take one down, pass it around,'+ (i-1) + ' bottles of coke on the wall.');
            }
        }
    };
    singSong();
     
                ////////////////////////////BONUS/////////////////////////////////

    const singSong1 = function (n) {

        let i = n
        for ( i = 99; i>0; i--) {
    
            if  (i === -1) {
                break;
            }
            if (i < 2) {
                console.log(i+' bottles of coke on the wall, 1 bottles of coke.');
                console.log('Take it down and pass it around, no more bottles of coke on the wall.');
                console.log(' No more bottles of coke on the wall, no more bottles of coke.');
                console.log('Go to the store and buy some more, no more bottles of coke on the wall.');
            }
    
            else {
            console.log (i+' bottles of coke on the wall,' + i +' bottles of coke.');
            console.log('Take one down, pass it around,'+ (i-1) + ' bottles of coke on the wall.');
            }
        }
    };

    singSong1(13);