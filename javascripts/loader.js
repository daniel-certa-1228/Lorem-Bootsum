'use strict';
console.log('loader.js');

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