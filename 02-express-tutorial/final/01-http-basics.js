const http = require('http');

const server = http.createServer((req, res) => {
  // request obj
  // console.log(req.method)
  // get url
  const url = req.url;

  // home page
  if (url === '/') {
    // set respònse header 
    res.writeHead(200, {'content-type': 'text/html'});
    res.write('<h1>home page</h1>');
    res.end();
  }
  else if (url === '/about') { // about page
    // set respònse header
    res.writeHead(200, {'content-type': 'text/html'});
    res.write('<h1>about page</h1>');
    res.end();
  }
  else { // 404
    res.writeHead(404, {'content-type': 'text/html'});
    res.write('<h1>page not found</h1>');
    res.end();
  }

});

server.listen(5000);
