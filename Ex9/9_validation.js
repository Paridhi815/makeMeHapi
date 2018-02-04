const hapi = require('hapi');
const Joi = require('joi');

const server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(8080),
});

// port: Number(process.argv[2] || 8080),
const handlerFunction = (request, reply) => {
  reply(`You asked for the chicken ${request.params.breed}`);
};

server.route({
  path: '/chickens/{breed}',
  method: 'GET',
  handler: handlerFunction,
  config: {
    validate: {
      params: {
        // with: Joi.string().required(),
        breed: Joi.string().required(),
      },
    },
  },
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
