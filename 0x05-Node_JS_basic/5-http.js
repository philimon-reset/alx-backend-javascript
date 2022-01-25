const http = require('http');
const fs = require('fs');
const { argv } = require('process');

const hostname = 'localhost';
const port = 1245;

// eslint-disable-next-line consistent-return
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const { url } = req;
  if (url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (url === '/students') {
    res.write('This is the list of our students\n');
    if (fs.existsSync(argv[2])) {
      return new Promise((resolve) => {
        fs.readFile(argv[2], 'utf8', (err, data) => {
          if (err) {
            throw Error('Cannot load the database');
          }
          const result = [];
          data.split('\n').forEach((data) => {
            result.push(data.split(','));
          });
          result.shift();
          const newis = [];
          result.forEach((data) => newis.push([data[0], data[3]]));
          const fields = new Set();
          newis.forEach((item) => fields.add(item[1]));
          const final = {};
          fields.forEach((data) => { (final[data] = 0); });
          newis.forEach((data) => { (final[data[1]] += 1); });
          res.write(`Number of students: ${result.filter((check) => check.length > 3).length}\n`);
          Object.keys(final).forEach((data) => res.write(`Number of students in ${data}: ${final[data]}. List: ${newis.filter((n) => n[1] === data).map((n) => n[0]).join(', ')}`));
          res.end();
          resolve();
        });
      });
    }
    throw Error('Cannot load the database');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
