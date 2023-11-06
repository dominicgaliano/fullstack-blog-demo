require("dotenv").config();
const redis = require("redis");

const REDIS_PORT = 6379;
const REDIS_HOST = "redis";

// const client = redis.createClient({ 
//     legacyMode: true,
//     socket: {
//         port: REDIS_PORT,
//         host: REDIS_HOST
//     }});

const connectionURL = `redis://${REDIS_HOST}:${REDIS_PORT}`

// new version
const client = redis.createClient({
  url: connectionURL
}).on('error', err => console.log('Redis Client Error', err))

client.on("connect", () => {
  console.log("Client connected to redis...");
});

client.on("ready", () => {
  console.log("Client connected to redis and ready to use...");
});

client.on("error", (err) => {
  console.log(err.message);
});

client.on("end", () => {
  console.log("Client disconnected from redis");
});

process.on("SIGINT", () => {
  client.quit();
  process.exit(0);
});

module.exports = client;
