
const server = require('./5_views');

const html =
`<html>
    <head><title>Hello hapi</title></head>
    <body>
        Hello hapi
    </body>
</html>`;

describe('Testing Hapi Using Inject:', () => {
  test('Check Response status for valid path:', (done) => {
    server.inject('/?name=pari', (response) => {
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

