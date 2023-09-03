const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let result = '';

    for (let i = 0; i < expr.length; i += 10) {
        let letter = '';

        const encodedLetter = expr.substr(i, 10);
        if (encodedLetter === '**********') {
            result += ' ';
            continue;
        }

        for (let j = 0; j < encodedLetter.length; j += 2) {
            const encodedSymbol = encodedLetter.substr(j, 2);
            if (encodedSymbol === '10') {
                letter += '.';
            } else if (encodedSymbol === '11') {
                letter += '-';
            }
        }

        result += MORSE_TABLE[letter];
    }

    return result;
}

module.exports = {
    decode
}