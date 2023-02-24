const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.put('/', (req, res) => {
    setTimeout(() => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Time out error');
    }, 10000);
});
app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Time out error');
});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})