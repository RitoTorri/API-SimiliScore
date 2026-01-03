const responseSuccess = (res, message = 'Success', data = null) => {
    return res.status(200).json({ 
        success : true,
        message,
        data
    });
}

const responseError = (res, message = 'Error') => {
    return res.status(400).json({ 
        success : false,
        message
    });
}

const responseErrorInternal = (res, message = 'Error') => {
    return res.status(500).json({ 
        success : false,
        message
    });
}

module.exports = { responseSuccess, responseError, responseErrorInternal };
