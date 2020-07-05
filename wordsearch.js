const wordSearch = (letters, word) => {
    if (letters.length === 0) {
        return false
    }
    const newArray = [];
    for (let x = 0; x < letters.length; x++) {
        newArray[x] = [];
        for (let y = 0; y < letters.length; y++) {
            newArray[x][y] = letters[y][x];
        }
    }

    const verticalJoin = newArray.map(ls => ls.join(''));
    const horizontalJoin = letters.map(ls => ls.join(''))

    for (l of horizontalJoin) {
        for (k of verticalJoin) {
            if (l.includes(word) || k.includes(word)) return true;
        }
    }

    for (l of horizontalJoin) {
        for (k of verticalJoin) {
            if (!l.includes(word) || !k.includes(word)) return false;
        }
    }
};

module.exports = wordSearch;