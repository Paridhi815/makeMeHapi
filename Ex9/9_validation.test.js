
const server = require('./9_validation');


describe('Testing Hapi Using Inject:', () => {
  test('Check Response status for valid path:', (done) => {
    server.inject('/chickens/pari', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});

