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
	let message = []; // массив в катором сообщение разбито на строки по 10 цифр
	let counts = 10; // счетчик для отщета 10 цифр
	let indMes = 0; // индекс массива message
 
	for (let i = 0; i < expr.length; i++) {
		counts -= 1;
		message[indMes] = message[indMes] + expr[i];
		if (counts === 1) {  // удаление из массива undefined
			message[indMes] = message[indMes].slice(9);
		}
		if (counts === 0) { // сброс счетчика цифр
			counts += 10;
			indMes++;
		}
	}
	let arrMorse = []; //массив строк точки и тире
 
	message.forEach((item, index) => {
		let arrItem = item.split('');
		let symbolMorse = '';
		let symbolMorseI = 0;
		let pairMorse = '';
		
	arrItem.forEach((el, i) => {
		let pair = '';
		if (i % 2 === 0) {
			pair = pair + el + arrItem[i + 1];
			let Morse = '';
			switch(pair) {
				case "00": Morse = Morse + ''; break;
				case "10": Morse = Morse + '.'; break;
				case "11": Morse = Morse + '-'; break;
				case "**": Morse = Morse + '*'; break;
			}
			symbolMorse += Morse;
		}
		});
		
		arrMorse[index] = symbolMorse;
	});
 
	let messageStr = []; //массив букв
	arrMorse.forEach((item, i) => {
		messageStr[i] = MORSE_TABLE[item];
	});
 
	console.log(messageStr);
	let strings = '';
	messageStr.forEach((item, i) => {
		if (item === undefined) {
			strings += ' ';
		} else {
			strings += messageStr[i];
		}
		console.log(strings);
	});
}

module.exports = {
    decode
}