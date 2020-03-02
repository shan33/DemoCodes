let express = require('express');
let path = require('path');
let backend = express();

backend.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/backend555.html'));
});
backend.listen(555, function() {
    console.log('listen 555');
});


