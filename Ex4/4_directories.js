const inert = require('inert');
// const path = require('path');
const Hapi = require('hapi');


const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: Number(3000),
});

server.register(inert, (err) => {
  if (err) { throw err; }
});

server.route({
  path: '/foo/bar/baz/{filename}',
  method: 'GET',
  handler: {
    directory: {
      path: './Ex4/public',
    },
  },
});

// to make the server listen to the assigned port
server.start((err) => {
  if (err) { throw err; }
  console.log('Server running at:', server.info.uri);
});

module.exports = server;

