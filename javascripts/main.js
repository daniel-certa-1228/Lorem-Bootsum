'use strict';
console.log("main.js");

let loader = require("./loader");
let generators = require("./generators");

let bootsumArray = [];

loader.loadBootsum()
    .then((bootsum) => {
        let boots = Object.values(Object.values(bootsum)[0]);
        console.log(boots);
        for (let i = 0; i < boots.length; i++) {
            bootsumArray.push(boots[i]);
        }
    });

console.log(bootsumArray);