const http = require('http'); 			// http ��� �ε�

var server = http.createServer((req, res) => {	
//createServer �Լ��� ���� �ν��Ͻ� ����, �ݹ����� req,res ���޹ް� �ȴ�.
	res.end("hello world");
});

server.listen(9090);