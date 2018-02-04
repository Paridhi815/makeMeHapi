
const server = require('./8_streams');


describe('Testing Hapi Using Inject:', () => {
  test('Check Response status for valid path:', (done) => {
    server.inject('/', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});

