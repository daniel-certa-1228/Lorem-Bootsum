'use strict';
console.log("main.js");

let loader = require("./loader");
let generators = require("./generators");
let output = require("./output");

var bootsumArray = [];

loader.loadBootsum()
    .then((bootsum) => {
        let boots = Object.values(Object.values(bootsum)[0]);
        for (let i = 0; i < boots.length; i++) {
            bootsumArray.push(boots[i]); 
        }
        return bootsumArray;
    })
    .then((bootsumArray) => {
        let bootsum = generators.generateParagraphs(5, bootsumArray);
        return bootsum;
    })
    .then((bootsum) => {
        output.outputLorem(bootsum);
    });
