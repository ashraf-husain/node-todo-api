const expect = require('expect');
const request =  require('supertest');
var {ObjectID} = require('mongodb');

const {app} = require('./../server.js');
const {Todo} = require('./../model/Todo');
 
const todos = [{
    _id:new ObjectID(),
    text:"first test"
},{
    _id:new ObjectID(),
    text:"second test"
}];

beforeEach((done) =>{
    Todo.remove({}).then(() => {
        Todo.insertMany(todos);
    }).then(() => done());
});

describe('POST /Todos', () => {
    it('should create a new todo', (done)=> {
        var text= 'test todo test';
        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res)=> {
        expect(res.body.text).toBe(text);
        }) 
        .end((err, res) =>{
         if(err){
             return done(err);
         }

         Todo.find({text}).then((todos) => {
             expect(todos.length).toBe(1);
             expect(todos[0].text).toBe(text);
             done();
         }).catch((e) => done(e));
        });
    });

    it('should not create invalid data',(done) =>{
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err, res) =>{
            if(err){
                return done(err);     
            }
            Todo.find().then((todos)=>{
                expect(todos.length).toBe(2);
                done()
            }).catch((e) => done(e));
        });
    });
});

describe('GET/todos', () => {
it('sould get all todos', (done) =>{
    request(app)
    .get('/todos')
    .expect(200)
    .expect((res) =>{
        expect(res.body.todos.length).toBe(2);
    })
    .end(done);
})
});

describe('GET/todos/:id', () =>{
  it('should return the doc', (done) =>{
      request(app)
      .get(`/todos/${todos[0]._id.toHexString()}`)
      .expect(200)
      .expect((res) =>{
          expect(res.body.todo.text).toBe(todos[0].text);
      })
      .end(done);
  });

  it('should return 404 if todo not found', (done)=>{
    var _id = new ObjectID()
    request(app)
      .get(`/todos/${_id.toHexString()}`)
      .expect(404)
      .end(done)
  });

  it('should return 404 for nonIds', (done)=>{
      request(app)
      .get('/todos/123')
      .expect(404)
      .end(done)
  });
})