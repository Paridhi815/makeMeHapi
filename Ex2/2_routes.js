const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: Number(process.argv[2]) || 8080,
});


const handlerFunction = (request, reply) => reply(`Hello ${request.params.name}`);
// add route
server.route({
  path: '/{name}',
  method: 'GET',
  handler: handlerFunction,
});


// to make the server listen to the assigned port
server.start((err) => {
  if (err) { throw err; }
  console.log('Server running at:', server.info.uri);
});


module.exports = server;
