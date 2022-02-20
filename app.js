const path = require('path');
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const {engine} = require('express-handlebars');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: ''}));
app.set('views', path.join(__dirname, 'static'));

app.use(apiRoutes);


app.listen(3200, () => {
    console.log('Servers has started on Port 3200');
});