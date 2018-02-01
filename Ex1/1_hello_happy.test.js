// import { expectationFailed } from '../../../Library/Caches/typescript/2.6/node_modules/@types/boom';

const server = require('./1_hello_happy');


describe('Testing Hapi Using Inject:', () => {
  test('Check Response status:', (done) => {
    server.inject('/', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
