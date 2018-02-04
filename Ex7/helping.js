const Vision = require('vision');
const Hapi = require('hapi');
const handle = require('handlebars');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080),
});
// port: Number(process.argv[2] || 8080)

server.register(Vision, (err) => {
  if (err) throw err;
});

server.views({
  engines:
  { html: handle },
  path: './Ex7/template',
  helpersPath: './Ex7/helpers',
});

server.route({
  path: '/',
  method: 'GET',
  handler:
   { view: 'index.html' },
});

server.start((err) => {
  if (err) { console.log(err.message); throw err; }
  // console.log('Het');
  console.log('Server running at:', server.info.uri);
});

module.exports = server;
