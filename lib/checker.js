const rp = require("request-promise");
const Promise = require("bluebird");

module.exports = (uri => {
    return new Promise((resolve, reject) => {
        rp({
            uri: uri,
            followAllRedirects: true,
            resolveWithFullResponse: true
        }).then(res => {
            resolve(res.request.uri.href);
        }).catch(reject);
    });
});
