// import { options } from '../../../Library/Caches/typescript/2.6/node_modules/@types/joi';


const server = require('./3_rest_well_with_hapi');

const html =
`<html>
    <head><title>Hello Handling</title></head>
    <body>
        Hello Handling
    </body>
</html>`;

describe('Testing Hapi Using Inject:', () => {
  test('Check Response status for valid path:', (done) => {
    const options = {
      method: 'GET',
      url: '/',
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('Check Response status for invalid path:', (done) => {
    const options = {
      method: 'GET',
      url: '/ewfrtbhy',
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(404);
      done();
    });
  });
});
