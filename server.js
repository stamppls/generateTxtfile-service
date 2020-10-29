const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());

app.use(cors());

require('./module/route')(app);

app.listen(3003,() => {
    console.log("Server is running...")
});