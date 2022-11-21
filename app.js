const express = require('express');
const app = express();
const port = 5000;
const routes = require('./routes/routes.js');


app.use(express.urlencoded({extended: false}));
app.use(express.json());

routes(app)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`El servidor está escuchando en el puerto ${port}`)
})