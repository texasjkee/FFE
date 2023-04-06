const http = require('http');
const fs = require('fs');

const contentTypes = require('./abstract/allTypes.js');
const getType = require('./abstract/getType.js');
const statusCodes = require('./abstract/statusCodes.js');
const homePage = fs.readFileSync('./html/index.html', 'utf-8');

const PORT = 3333;

// const secretPass = 0077;

// const ROOT = {status: false};

// const checkPass = pass => {
//   if(pass === secretPass) {
//     return !ROOT.status;
//  }
// }

const app = http.createServer((req, res) => {

  if(req.url !== '/favicon.ico') {
    const urlType = getType(req.url);
    const urlPath = `.${req.url}`
    const home = req.url === '/';

    if(home) {
      res.writeHead(statusCodes.OK_STATUS, {'Content-Type': 'text/html'});
      res.end(homePage);
    } else {
      fs.readFile(urlPath, (err, data) => {
        if(err) {
          res.statusCode = statusCodes.BAD_REQUEST;
          res.end('Bad request');
        }
        res.writeHead(statusCodes.OK_STATUS, {'Content-type':`${contentTypes.urlType}`});
        res.end(data);
      })
    } 
  }
})

app.listen(PORT, () => {
  console.log(`Running server on ${PORT}`)
});

// } else {
//   res.write('You have not access!!!')
// }