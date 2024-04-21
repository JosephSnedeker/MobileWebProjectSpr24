const http = require('http');
const { parse } = require('querystring');
const server = http.createServer((req, res) => {
        if (req.method === 'POST') {
                collectRequestData(req, result => { res.end('Are you a '+result.age+ ' years old who likes ' + result.fcolor+ '? I like you!')});
        }
});
server.listen(8080);
function collectRequestData(request, callback) {
        const FORM_URLENCODED = 'application/x-www-form-urlencoded';
        if(request.headers['content-type'] === FORM_URLENCODED) {
                let body = '';
                request.on('data', chunk => { body += chunk.toString(); });
                request.on('end', () => { callback(parse(body)); });
        }
        else { callback(null); }
}
console.log('Server running at http://127.0.0.1:8080/');