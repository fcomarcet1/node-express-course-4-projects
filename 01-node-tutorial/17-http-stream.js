var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8');

    fileStream.on('open', () => {
      // leemos el fichero, y con la pipe lo inyectamos en la response
      console.log('Open fileStream->createReadStream');
      fileStream.pipe(res);
    });

    fileStream.on('error', (err) => {
      res.end(err);
    });

    fileStream.on('close', () => {
      console.log('Close fileStream->createReadStream');
    });
  })
  .listen(5000);
