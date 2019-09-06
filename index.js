const fetch = require('node-fetch');
const credentials = require('./lib/credentials.js');
const anypointmq = require('./lib/anypointmq.js');

credentials.getCredentials()
              .then((credentials) => anypointmq.putMessage(JSON.parse(credentials), {
                  "body": "{\"container\": \"xom\",\"fileName\":\"invoice-xxxx-sample.xml\"}"
})).then(console.log);