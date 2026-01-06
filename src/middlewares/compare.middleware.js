const validators = require('../validators/compare.validators');
const responses = require('../helpers/responses');

const middlewareCompare = (req, res, next) => {
    const { string1, string2 } = req.body;

    if (string1 === undefined || string2 === undefined)
        return responses.responseError(res, 'Please provide both strings. string1 and string2 are required');

    if (validators.validateLength(string1, string2))
        return responses.reponseErrorFormat(res, 'Strings cannot be longer than 1000 characters');

    if (validators.isEmpty(string1) || validators.isEmpty(string2))
        return responses.reponseErrorFormat(res, 'Strings cannot be empty');

    next();
}

module.exports = middlewareCompare;