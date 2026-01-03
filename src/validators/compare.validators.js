const isEmpty = string => string.trim().length === 0 ? true : false;

const validateLength = (string1, string2) => 
    (string1.length > 1000 || string2.length > 1000) ? true : false;

module.exports = { isEmpty, validateLength };