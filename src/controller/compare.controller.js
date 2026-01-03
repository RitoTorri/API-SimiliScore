const { Router } = require('express');
const validators = require('../validators/compare.validators');
const responses = require('../helpers/responses');
const compareStrings = require('../helpers/compareStrings.helpers');


const router = Router();

router.post('/', (req, res) => {
    try {
        const { string1, string2 } = req.body;

        if (!string1 || !string2)
            return responses.responseError(res, 'Please provide both strings');

        if (validators.isEmpty(string1) || validators.isEmpty(string2))
            return responses.responseError(res, 'Strings cannot be empty');

        const result = compareStrings(string1, string2);
        return responses.responseSuccess(res, 'Successful Comparison', result);

    } catch (error) {
        responses.responseErrorInternal(res, error.message);
    }
});

module.exports = router;