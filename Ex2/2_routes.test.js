
const server = require('./2_routes');


describe('Testing Hapi Using Inject:', () => {
  test('Check Response status for valid path:', (done) => {
    server.inject('/pari', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('Check Response status for invalid path:', (done) => {
    server.inject('/hello/hi', (response) => {
      expect(response.statusCode).toBe(404);
      done();
    });
  });
});
