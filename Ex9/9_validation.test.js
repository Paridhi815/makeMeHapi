
const server = require('./9_validation');


describe('Testing Hapi Using Inject:', () => {
  test('Check Response status for valid path:', (done) => {
    server.inject('/chickens/pari', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('Check Response status for invalid path:', (done) => {
    server.inject('/hello/', (response) => {
      expect(response.statusCode).toBe(404);
      done();
    });
  });
  test('Check Reply:', (done) => {
    server.inject('/chickens/pari', (response) => {
      expect(response.result).toBe('You asked for the chicken pari');
      done();
    });
  });
});

