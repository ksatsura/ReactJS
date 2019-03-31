const path = require('path');
const express = require('express');

const app = express();

const staticPath = path.join(__dirname, '/dist/');
app.use(express.static(staticPath));

app.set('port', 3000);

app.listen(app.get('port'), function() {
    console.log('listening');
});