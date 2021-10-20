const os  = require('os');
const { networkInterfaces } = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

// get local ip
const nets = networkInterfaces();
const results = Object.create(null); // Or just '{}', an empty object

for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        if (net.family === 'IPv4' && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }
            results[name].push(net.address);
        }
    }
}

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  hostname: os.hostname(),
  ip: results,
  networkInterfaces: os.networkInterfaces(),
  version: os.version(),
  arch: os.arch(),
  cpus: os.cpus(),
};

console.log(currentOS);
