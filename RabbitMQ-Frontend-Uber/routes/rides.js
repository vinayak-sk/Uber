var amqp = require('amqp');

var connection = amqp.createConnection({host:'127.0.0.1'});
var rpc = new (require('./amqprpc'))(connection);


function make_request(queue_name, msg_payload, callback){
	console.log(queue_name);
	rpc.makeRequest(queue_name, msg_payload, function(err, response){
		callback(err, response);
	});
}

exports.make_request = make_request;
