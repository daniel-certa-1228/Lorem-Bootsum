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
