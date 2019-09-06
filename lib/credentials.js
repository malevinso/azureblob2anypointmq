const redis = require('async-redis');
const anypointmq = require('./anypointmq');
const config = require('./config.js');

const redisClient = redis.createClient( config.REDIS_PORT, 
                                        config.REDIS_HOST, 
                                        { auth_pass: config.REDIS_PASSWORD,
                                          tls: { servername: config.REDIS_HOST}
                                        });

redisClient.on("error", (err) => {
  context.log("Error", err)
});

const getCredentials = async () => {
  try {
    let credentials = await redisClient.get("credentials");
    context.log("Used credentials from Redis", credentials);
    if(!credentials) {
      credentials = await anypointmq.authenticate(config.ANYPOINTMQ_CLIENTID,
                                                config.ANYPOINTMQ_CLIENTSECRET,
                                                config.ANYPOINTMQ_GRANTTYPE);
      await redisClient.set("credentials", JSON.stringify(credentials), "EX", "600");
      context.log("used credentials from AnypointMQ");
    }
    return credentials;
  } catch(err) {
    context.log("Error when getting credentials", err);
  }
}

exports.getCredentials = getCredentials;