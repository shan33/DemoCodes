let express = require('express');
let backend = express();

backend.get('/', (req, res) => {
    let callback = req.query.callback;
    console.log(callback);
    res.send(`callback('JSONP:  555 -> 333')`);
});
backend.listen(333, function() {
    console.log('listen 333');
});


