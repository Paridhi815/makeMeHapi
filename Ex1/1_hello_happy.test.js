// import { expectationFailed } from '../../../Library/Caches/typescript/2.6/node_modules/@types/boom';

const server = require('./1_hello_happy');


describe('Testing Hapi Using Inject:', () => {
  test('Check Response status for valid path:', (done) => {
    server.inject('/', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('Check Response status for invalid path:', (done) => {
    server.inject('/hello', (response) => {
      expect(response.statusCode).toBe(404);
      done();
    });
  });
  test('Check Reply:', (done) => {
    server.inject('/', (response) => {
      expect(response.payload).toBe('Hello hapi');
      done();
    });
  });
});
