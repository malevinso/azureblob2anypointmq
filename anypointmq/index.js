const fetch = require('node-fetch');
const credentials = require('./lib/credentials.js');
const anypointmq = require('./lib/anypointmq.js');

module.exports = async function (context, blob) {
    const credentials = await credentials.getCredentials();
    context.log("using credentials", credentials);
    anypointmq.putMessage(JSON.parse(credentials), JSON.stringify(
            {
                body: { container: "xom",fileName: + context.bindingData.name }
            }
        ))
        .then(context.log)
        .catch(context.log);
    
    //context.log(Object.getOwnPropertyNames(context.bindingData.metadata));
    //context.log("JavaScript blob trigger function processed blob \n Name:", context.bindingData.name, "\n Blob Size:", blob.length, "Bytes");
};

//const credentialss =  credentials.getCredentials();
//console.log(credentialss);