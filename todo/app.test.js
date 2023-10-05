const request = require('supertest');
const app = require('./app');
const task = require('./task');

//test('Get / I am alive and responding', (done) => {
 //   request(app)
   // .get('/')
   // .expect(200)
   // .end(done);
//});

test('GET/ Id ', (done) => {
    request(app)
    .get('/2')
    .expect(200)
    .end(done);
});

test('DELETE /id', done => {
    const tasks = [
        {id: 1, desc: 'task 1', date: '2023-10-05'},
        {id: 2, desc: 'task 2', date: '2023-10-05'}
    ];

    request(app)
    .delete('/2')
    .expect(200, tasks[1] == undefined)
    .end(done); 
});

test('GET /jibberish', done => {
    request(app)
    .get('/asdijopswko')
    .expect(404)
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

