'use strict';

// http://blog.ryangreen.ca/2016/01/04/how-to-http-redirects-with-api-gateway-and-lambda/
 
exports.handler = function(event, context) {
    const URL_TEMPLATE = "https://cdn.loc.gov/service/ll/usrep/usrep{{volume}}/usrep{{volume}}{{page}}/usrep{{volume}}{{page}}.pdf";
    var volume = event['volume'];
    var page = event['page'];
    var url = URL_TEMPLATE.replace(/{{volume}}/g, volume).replace(/{{page}}/g, page);
    
    console.log("redirecting to " + url);
    context.succeed({
        location: url
    });
};
