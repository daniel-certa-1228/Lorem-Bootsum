'use strict';
console.log('output.js');

var output = {};

output.outputLorem = (lorem_html) => {
    $('#lorem-holder').html("");
    $('#lorem-holder').hide(0);
    $('#lorem-holder').html(lorem_html);
    $('#lorem-holder').fadeIn(200);
};

module.exports = output;