var todos = require('../models/todoModel');

module.exports = function(app){
    
    app.get('/api/setupTodos', function(req, res){
        //seed the data
        var staterTodos = [
            {
                username: 'baby',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'boy',
                todo: 'Buy toy',
                isDone: false,
                hasAttachment: false                
            }
        ];

        todos.create(staterTodos, function(err, data){
            res.send(data);
        });
    });
}