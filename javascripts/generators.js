'use strict';
console.log('generators.js');

var generators = {};

function random_between_4and8() {
    let min = 4;
    let max = 8;
    // console.log(min, max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// console.log(random_between_4and8());

function random_num(num) {
    return Math.floor(Math.random()*(num));
}
// console.log(random_num(100));

generators.generateParagraphs = (num, array) => {
    let paragraphs = "";
    let num_of_sentences = random_between_4and8();

    for(let j = 0; j<num; j++) {
        paragraphs += `<p class="indented">`;
        for (let i=0; i<num_of_sentences; i++) {
            let randomSentence = random_num(array.length);
            paragraphs += `${array[randomSentence]}  `;
        }
        paragraphs += `</p>`;
    }
    console.log(paragraphs);
};

module.exports = generators;
