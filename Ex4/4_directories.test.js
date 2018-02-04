
const server = require('./4_directories');

const fs = require('fs');

const html = fs.readFileSync('./Ex4/public/file.html', 'UTF8');

describe('Testing Hapi Using Inject:', () => {
  beforeAll((done) => {
    server.on('start', () => {
      done();
    });
  });

  afterAll((done) => {
    server.on('stop', () => {
      done();
    });
    server.stop();
  });
  test('Check Response status for valid path:', (done) => {
    const options = {
      method: 'GET',
      url: '/foo/bar/baz/file.html',
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
