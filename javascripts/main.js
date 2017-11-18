'use strict';
console.log("main.js");

let loader = require("./loader");
let generators = require("./generators");

var bootsumArray = [];

loader.loadBootsum()
    .then((bootsum) => {
        let boots = Object.values(Object.values(bootsum)[0]);
        // console.log(boots);
        for (let i = 0; i < boots.length; i++) {
            bootsumArray.push(boots[i]); 
        }
        // console.log(bootsumArray.length);
        return bootsumArray;
    })
    .then((bootsumArray) => {
        console.log(bootsumArray.length);
        let random1 = Math.floor(Math.random()*(bootsumArray.length));
        console.log(bootsumArray[random1]);

    });

