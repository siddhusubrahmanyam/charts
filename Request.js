const request = require('request');
 
_EXTERNAL_URL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SYRA&outputsize=full&apikey=QXINKK7SFESP0KCX';


const callExternalApiUsingRequest = (callback) => {
    request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
    return callback(body);
    });
}

module.exports.callApi = callExternalApiUsingRequest;