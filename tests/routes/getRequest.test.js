const Server = require('../../server');

describe('Server test', () => {
  //  executes before any test is executed
  beforeAll((done) => {
    Server.on('start', () => {
      done();
    });
    Server.on('error',()=>{
      done();
    })
  });

// //  executes after all tests are executed
// afterAll((done) => {
//   Server.on('stop', () => {
//     done();
//   });
//   Server.stop();
// });

// test('responds with success statusCode', (done) => {
//   const options = {
//     method: 'GET',
//     url: '/route',
//   };
//   Server.inject(options, (response) => {
//     expect(response.statusCode).toBe(200);
//     done();
//   });
// });

// test('responds for invalid route path', (done) => {
//   const options = {
//     method: 'GET',
//     url: '/routers',
//   };
//   Server.inject(options, (response) => {
//     expect(response.statusCode).toBe(404);
//     done();
//   });
// });

// test('response checked', (done) => {
//   const options = {
//     method: 'GET',
//     url: '/route',
//   };
//   const output = 'This is a get request to /route';
//   Server.inject(options, (response) => {
//     expect(response.result.message).toBe(output);
//     done();
//   });
// });

