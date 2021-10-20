const { createReadStream } = require('fs');

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 });
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' });

const fileStream = createReadStream('./content/big.txt');
const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 });
const stream2 = createReadStream('../content/big.txt', { encoding: 'utf8' });

fileStream.on('data', (result) => {
  console.log(result);
});

fileStream.on('error', (err) => {
  console.log(err);
});
