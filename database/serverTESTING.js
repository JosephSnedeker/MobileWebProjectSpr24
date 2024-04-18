const http = require('http');
const { parse } = require('querystring');
const fs = require('fs'); // Required to read the HTML file
const addUser = require('./addUser');
const server = http.createServer((req, res) => {
	if (req.method === 'POST') {
		collectRequestData(req, result => {
			if(result) {
				addUser.signup(result.uname, result.email, result.psw);
			} else {
				res.end("Sorry, couldn't process your request.");
			}
		});
	}
//Serve the form.html file for non-POST requests
		
});
server.listen(8080);
function collectRequestData(request, callback) {
	const FORM_URLENCODED = 'application/x-www-form-urlencoded';
	if(request.headers['content-type'] === FORM_URLENCODED) {
		let body = '';
		request.on('data', chunk => {
			body += chunk.toString();
		});
		request.on('end', () => {
			callback(parse(body));
		});
	}
	else {
		callback(null);
	}
}
