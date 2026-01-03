const similarity = require('similarity');

const compareStrings = (string1, string2) => {
    return (similarity(string1, string2) * 100).toFixed(2);
}

module.exports = compareStrings;