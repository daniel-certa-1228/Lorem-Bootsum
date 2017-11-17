'use strict';
console.log("main.js");

{
var Bootsum = {};
}

$( document ).ready(function() {

    {
        Bootsum.loadBootsum = () => {

            let bootsumArray = [];

            $.ajax({url:"../data/lorem_bootsum.json"}).done(bootsumLoadComplete).fail(function(error) {
                console.log("error");
            });

            function bootsumLoadComplete(json) {
                let bootsumArray = Object.values(Object.values(json)[0]);
                console.log(bootsumArray);
            }
        };
        Bootsum.loadBootsum();
    }
});