const express = require('express');
const app = express();
const cors = require('cors')

const routes = require('./routes');

app.use(cors( /*{
    origin: 'http://localhost:3000'
}*/))
app.use(express.json());
app.use(routes);


app.listen(3333);