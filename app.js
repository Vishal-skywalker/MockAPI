const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.all('/', (req, res) => {
    setTimeout(() => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Time out error');
    }, 10000);
});
app.all('/notimeout/:a', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('No time out with ' + req.params.a);
});

const port = process.env.PORT || 3000
var server = app.listen(port, function () {
    var host = server.address().address
    console.log("Example app listening at http://%s:%s", host, port)
})
