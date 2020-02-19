
const table = {
    "a": ["α", "ɑ", "а"],
    "b": ["Ƅ", "ƅ", "Ь", "ь"],
    "c": ["ç", "ƈ", "с"],
    "d": ["ɗ", "Ԁ", "ԁ"],
    "e": ["е"],
    "f": ["ϝ"],
    "g": ["ɠ", "ɡ"],
    "h": ["ɦ", "ɧ"],
    "i": ["ι", "¡", "ɩ"],
    "j": ["ɉ"],
    "k": ["ƙ"],
    "l": ["1", "Ɩ", "ǀ", "ɭ", "ӏ"],
    "m": ["ɱ"],
    "n": ["η", "ƞ", "ɲ", "ɳ", "п"],
    "o": ["ο", "ơ", "о"],
    "p": ["þ", "ρ", "ƥ", "ƿ", "р"],
    "q": ["ɖ", "զ"],
    "r": ["ɼ", "ɽ", "г"],
    "s": ["ʂ"],
    "t": ["τ"],
    "u": ["μ", "υ", "ư", "ɥ"],
    "v": ["ν", "ѵ"],
    "w": ["ω", "ɯ", "ɰ"],
    "x": ["χ", "×", "х", "ӽ"],
    "y": ["γ", "ƴ", "у"],
    "z": ["ƶ", "ȥ", "ʐ"],
    "A": ["Α", "Λ", "∆", "Ά", "А"],
    "B": ["Β", "β", "ß", "ʙ", "В", "в"],
    "C": ["Ç", "Ƈ", "С"],
    "D": ["Ð", "Ɖ", "Ɗ"],
    "E": ["Ε", "Έ", "Е"],
    "F": ["Ƒ", "Ϝ"],
    "G": ["ɢ"],
    "H": ["Η", "ʜ", "Н", "н", "Ӊ", "ӊ"],
    "I": ["Ι", "ɪ"],
    "J": ["Ɉ", "Ј"],
    "K": ["Κ", "Ƙ", "К", "к"],
    "L": ["└", "Ƚ"],
    "M": ["Μ", "ϻ", "М", "м", "Ӎ", "ӎ"],
    "N": ["Ν", "Ɲ", "ɴ"],
    "O": ["Ο", "0", "Ơ", "Ό", "О", "Օ"],
    "P": ["Ρ", "Ƥ", "Р"],
    "Q": ["Ϙ", "ϙ"],
    "R": ["Ʀ", "ʀ"],
    "S": ["Ѕ"],
    "T": ["Τ", "Ƭ", "Ʈ", "Т", "т"],
    "U": ["Ư", "Ʋ", "Մ"],
    "V": ["Ѵ"],
    "W": ["ѡ"],
    "X": ["Χ", "Х", "Ӽ"],
    "Y": ["Ƴ", "ʏ", "Ύ", "У"],
    "Z": ["Ζ", "Ƶ", "Ȥ"],
};

const input = document.getElementById('input');
const output = document.getElementById('output');

document.getElementById('convert').addEventListener('click', e => {
    const input_text = input.value;

    const output_text = Array.prototype.map.call(input_text, c => {
        if (c in table)
        {
            cand = table[c];
            const length = cand.length;
            c = cand[Math.floor(Math.random() * length)]
        }
        return c;
    }).join('');

    output.value = output_text;
});

document.getElementById('tweet').addEventListener('click', e => {
    const encoded_text = encodeURI(output.value);
    window.open(`https://twitter.com/intent/tweet?text=${encoded_text}`);
});

document.getElementById('copy').addEventListener('click', e => {
    output.select();
    document.execCommand('Copy');
});
