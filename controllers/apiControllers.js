var todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function(app){

    //look into the http request before handling anything
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended : true }));

    app.get('/api/todos/:username', function(req, res){
        todos.find({ username: req.params.username }, function (err, data) {
            if(err) throw err;

            res.send(data);
        });
    });

    app.get('/api/todo/:id', function(req, res) {
        todos.findById({ _id: req.params.id }, function(err, data) {
            if (err) throw err;

            res.send(data)
        })
    });

    app.post('/api/todo', function(req, res) {
        var todo = {
            username: req.body.username,
            todo: req.body.todo,
            isDone: req.body.isDone,
            hasAttachment: req.body.hasAttachment
        }

        if(req.body.id){
            todos.findByIdAndUpdate( req.body.id, todo, function(err, data){
                if (err) throw err;

                res.send("Successful update!");
            });

        } else {
            var newTodo = todos(todo);
            newTodo.save(function(err, data){
                if (err) throw err;

                res.send("Successful creation!");
            });
        }
    });

    app.delete('/api/todo', function(req, res){
        todos.findByIdAndRemove(req.body.id, function(err, data) {
            if (err) throw err;

            res.send("Successful deletion!");
        })
    });
}