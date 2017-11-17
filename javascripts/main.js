'use strict';
console.log("main.js");

{
    var Bootsum = {};
}

$( document ).ready(function() {

    let bootsumArray = [];
    
     Bootsum.getBootsum = () => {
        let bootsum =  $.ajax({url:"../data/lorem_bootsum.json"});
        return bootsum;
    };

    Bootsum.loadBootsum = () => {
        Bootsum.getBootsum().done(function(data) {
            let bootArray = Object.values(Object.values(data)[0]);
            // console.log(bootArray);
            for (let i = 0; i< bootArray.length; i++) {
                bootsumArray.push(bootArray[i]);
            } // return bootArray;
        });
    };
    Bootsum.loadBootsum();
    console.log(`full`, bootsumArray);
/////////////////////////////////////////////////////

    {
        let random1 = Math.floor(Math.random()*10);
        console.log(random1);
        // console.log(Bootsum.returnBootsumArray());
    }

});


