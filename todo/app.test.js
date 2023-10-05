const request = require('supertest');
const app = require('./app');
const task = require('./task');

//test('Get / I am alive and responding', (done) => {
 //   request(app)
   // .get('/')
   // .expect(200)
   // .end(done);
//});

test('POST / task info ', (done) => {
    request(app)
    .get('/task')
    .expect
});


test('GET/ Id ', (done) => {
    request(app)
    .get('/users')
    .expect(200)
    .end(done);
});

test('DELETE/ Id ', (done) => {
    request(app)
    .get('/users')
    .expect(200)
    .end(done);
});




// test(' redigera uppgifterna ', (done) => {
   // request(app)
    //.get('/users')
    //.expect(200)
   // .end(done);
//});

//test(' rADERA uppgifter ', (done) => {
  //  request(app)
    //.get('/users')
    //.expect(200)
  //  .end(done);
//});

