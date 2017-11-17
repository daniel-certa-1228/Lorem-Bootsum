'use strict';
console.log("main.js");

{
    var Bootsum = {};
}

$( document ).ready(function() {
    
    {
        Bootsum.loadBootsum = () => {

            let bootsumArray = [];

            $.ajax({url:"../data/lorem_bootsum.json"}).done(bootsumLoadComplete).fail(bootsumLoadFailed);

            function bootsumLoadComplete(json) {
                bootsumArray = Object.values(Object.values(json)[0]);
                Bootsum.passBootsum(bootsumArray);
            }

            function bootsumLoadFailed(error) {
                console.log(error);
            }
        };
        Bootsum.loadBootsum();
    }
    //////////////////////////////////////////////
    {
        let bootsumOutput = [];
        // console.log(bootsumOutput);

        Bootsum.passBootsum = (bootsumArray) => {
            for (let i = 0; i < bootsumArray.length; i++) {
                console.log(bootsumArray[i]);
            }
        };

    }

});


