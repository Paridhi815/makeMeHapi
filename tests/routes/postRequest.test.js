const Server = require('../../server');

describe('Server test', () => {
  //  executes before any test is executed
  beforeAll((done) => {
    Server.on('start', () => {
      done();
    });
  });

  //  executes after all tests are executed
  afterAll((done) => {
    Server.on('stop', () => {
      done();
    });
    Server.stop();
  });

  test('responds with success statusCode', (done) => {
    const options = {
      method: 'POST',
      url: '/route',
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('responds for invalid route path', (done) => {
    const options = {
      method: 'POST',
      url: '/routers',
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(404);
      done();
    });
  });

  test('response checked', (done) => {
    const options = {
      method: 'POST',
      url: '/route',
    };
    const output = 'This is a post request to /route';
    Server.inject(options, (response) => {
      expect(response.result.message).toBe(output);
      done();
    });
  });
});
