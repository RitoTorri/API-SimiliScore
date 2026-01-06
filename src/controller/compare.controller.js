const validators = require('../validators/compare.validators');
const responses = require('../helpers/responses');
const compareStrings = require('../helpers/compareStrings.helpers');

class CompareController {
    constructor() { }

    compareStrings(req, res) {
        try {
            const { string1, string2 } = req.body;
            const result = compareStrings(string1, string2);
            responses.responseSuccess(res, 'Successful Comparison', result);

        } catch (error) {
            console.error(error.message);
            responses.responseErrorInternal(res, error.message);
        }
    }
}


module.exports = CompareController;