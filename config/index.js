var config = require('./config');

module.exports = {
    getDBConnectionString : function(){
        var conn = 'mongodb://'+config.username+':'+config.pass+"@localhost:27017/node_test";
        console.log(conn);
        return conn;
    }
}