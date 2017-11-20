(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
// console.log('generators.js');

var generators = {};

function random_between_4and8() {
    let min = 4;
    let max = 8;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function random_num(num) {
    return Math.floor(Math.random()*(num));
}

generators.generateParagraphs = (num, array) => {
    let paragraphs = "";
    
    for(let j = 0; j<num; j++) {
        let num_of_sentences = random_between_4and8();
        paragraphs += `<p class="indented">`;
        for (let i=0; i<num_of_sentences; i++) {
            let randomSentence = random_num(array.length);
            paragraphs += `${array[randomSentence]}  `;
        }
        paragraphs += `</p>`;
    }
    return paragraphs;
};

module.exports = generators;

},{}],2:[function(require,module,exports){
'use strict';
// console.log('loader.js');

var bootsumLoader = {};

bootsumLoader.loadBootsum = () => {
    return new Promise(function(resolve, reject){
        let getBoot = new XMLHttpRequest();
        getBoot.open("GET", "../data/lorem_bootsum.json");
        getBoot.send();
        getBoot.addEventListener("load", (event) => {
            let bootsum = JSON.parse(event.target.responseText);
            resolve(bootsum);
        });
    });
};

module.exports = bootsumLoader;
},{}],3:[function(require,module,exports){
'use strict';
// console.log("main.js");

let loader = require("./loader");
let generators = require("./generators");
let output = require("./output");

var bootsumArray = [];

function main_lorem() {
    loader.loadBootsum()
    .then((bootsum) => {
        bootsumArray.length = 0;
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
}
main_lorem();

$('#bootsum-btn').click(function() {
    main_lorem();
});
},{"./generators":1,"./loader":2,"./output":4}],4:[function(require,module,exports){
'use strict';
// console.log('output.js');

var output = {};

output.outputLorem = (lorem_html) => {
    $('#lorem-holder').html("");
    $('#lorem-holder').hide(0);
    $('#lorem-holder').html(lorem_html);
    $('#lorem-holder').fadeIn(200);
};

module.exports = output;
},{}]},{},[3]);
