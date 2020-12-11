const pdf = require('html-pdf');
const fs = require('fs');

const config = require('./config');
var options = { format: 'Letter', mytag: { contents: 'ALLALALALAL' } };

const html = fs.readFileSync('./html-pdf/index.html', 'utf8');

pdf.create(html, options).toFile('./index.pdf', (err, res) => {
    if (err) return console.log(err);
    console.log(res)
});
