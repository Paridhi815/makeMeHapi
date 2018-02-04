
const vision = require('vision');
const Hapi = require('hapi');
const handle = require('handlebars');


const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(3000),
});

server.register(vision, (err) => {
  if (err) { throw err; }
});

server.views({
  engines: {
    html: handle,
  },
  path: './Ex5/templates',
});

server.route({
  path: '/',
  method: 'GET',
  handler: {
    view: 'index.html',
  },
});

// to make the server listen to the assigned port
if (!module.parent) {
  server.start((err) => {
    if (err) { throw err; }
    console.log('Server running at:', server.info.uri);
  });
}

module.exports = server;

