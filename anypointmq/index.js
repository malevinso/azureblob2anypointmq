const fetch = require('node-fetch');
const credentials = require('./lib/credentials.js');
const anypointmq = require('./lib/anypointmq.js');

module.exports = async function (context, blob) {
    const anyPointCredentails = await credentials.getCredentials();
    anypointmq.putMessage(JSON.parse(anyPointCredentails), JSON.stringify(
            {
                body: { container: "xom",fileName: + context.bindingData.name }
            }
        ))
        .then(context.log)
        .catch(context.log);
    
    //context.log(Object.getOwnPropertyNames(context.bindingData.metadata));
    //context.log("JavaScript blob trigger function processed blob \n Name:", context.bindingData.name, "\n Blob Size:", blob.length, "Bytes");
};