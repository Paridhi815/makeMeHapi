const Hapi = require('hapi');

const server = new Hapi.Server();

// create a server that listens on port 8080 if no argument is passed from command line
server.connection({
  host: 'localhost',
  port: Number(8080),
});

const handlerFunction = (request, reply) => reply('Hello hapi');

// add route
server.route({
  path: '/',
  method: 'GET',
  handler: handlerFunction,
});


// to make the server listen to the assigned port
if (!module.parent) {
  server.start((err) => {
    if (err) { throw err; }
    console.log('Server running at:', server.info.uri);
  });
}
module.exports = server;
