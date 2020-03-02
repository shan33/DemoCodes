let express = require('express');
let backend = express();

backend.all('*', (req, res, next) => {
    res.header({
        'Access-Control-Allow-Origin': 'http://localhost:555'
    });
    next();
});

backend.get('/', (req, res) => {
    res.send({
        title: 'CORS:  555 -> 333'
    });
});
backend.listen(333, function() {
    console.log('listen 333');
});


