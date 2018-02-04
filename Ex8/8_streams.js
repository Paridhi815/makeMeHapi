
const hapi = require('hapi');
const fs = require('fs');
const rot = require('rot13-transform');


const server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(8080),
});
// port: Number(process.argv[2] || 8080),

const handlerfunction = (request, reply) => {
  const stream = fs.createReadStream('./Ex8/text.txt');
  reply(stream.pipe(rot()));
};

server.route({
  path: '/',
  method: 'GET',
  handler: handlerfunction,
});

if (!module.parent) {
  server.start((err) => {
    if (err) {
      throw err;
    }
    console.log('Server running at:', server.info.uri);
  });
}

module.exports = server;
