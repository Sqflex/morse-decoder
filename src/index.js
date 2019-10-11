const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here

var result = '';
var tmp = '';

for (var i = 0; i < expr.length; i++) {
    // max length of letter in morse table is 10, so we have a check for i not equal  to 0 
    if (((i % 10) === 0) && (i !== 0))  {
        result += MORSE_TABLE[tmp];
        tmp = '';
    }
    // if first letter is 1 and next one is 0 - change to '.'
    if ((expr[i] === '1') && (expr[i+1] === '0')) { 
        tmp += '.';
        i++;
        continue;
    }
    // if first letter is 1 and next one is 1 - change to '-'
    if ((expr[i] === '1') && (expr[i+1] === '1')) {
        tmp += '-';
        i++;
        continue;
    }
    // just skip
    if ((expr[i] === '0') && (expr[i+1] === 0)) {
        i++;
        continue;
    }
    // space problem
    if (expr[i] === '*') {
        i+=10;
        result += ' ';
        continue;
    }

}
result += MORSE_TABLE[tmp];

return result;
}

module.exports = {
    decode
}