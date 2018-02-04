
const server = require('./8_streams');


describe('Testing Hapi Using Inject:', () => {
  test('Check Response status for valid path:', (done) => {
    server.inject('/', (response) => {
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
    server.inject('/', (response) => {
      expect(response.result).toBe('Gur Chefhvg bs Uncv-arff');
      done();
    });
  });
});

