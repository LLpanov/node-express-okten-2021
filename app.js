const path = require('path');
const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const {engine} = require('express-handlebars');

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');

app.engine('.hbs', engine({defaultLayout: ''}));
app.set('views', path.join(__dirname, 'static'));

const users = [
    {id: 1, firstName: 'Andriy', lastName: 'Kox', age: 23, password: 12345, email: '@nosorog@mail.ru', city: 'Berlin'},
    {id: 2, firstName: 'Galya', lastName: 'Vodka', age: 26, password: 12345, email: '@yandex.ru', city: 'Rostov'},
    {id: 3, firstName: 'Vasa', lastName: 'Pumpkin', age: 33, password: 12345, email: 'pupkin@yahoo.com', city: 'Minsk'},
    {id: 4, firstName: 'Andriy', lastName: 'Kox', age: 23, password: 12345, email: 'krymnash@crym.cr', city: 'Yalta'}
];

let error = null;

app.get('/singIn', (req, res) => {
    res.render('single');
});

app.post('/singIn', ({body}, res) => {
    const checkValue = users.find(user => user.email === body.email && user.password === body.password);
    if (checkValue) {
        res.redirect(`/users/${checkValue.id}`);
    }

});

app.get('/login', (req, res) => {
    res.render('login');

});

app.post('/login', ({body}, res) => {
    console.log(users,body)
    const checkUser = users.some(user => user.email === body.email);
    if (checkUser) {
        error = 'Такий емейл вже існує...';
        res.redirect('/error');
        return;
    }

    users.push({id: new Date().getTime(), ...body});
    res.redirect('/users');

});
app.get('/users', ({query}, res) => {
    if (Object.keys(query).length) {
        let userList = [...users];
        if (query.age) {
            userList = userList.filter(user => user.age === query.age);
        }
        if (query.city) {
            userList = userList.filter(user => user.city === query.city);
        }
        res.render('users', ({users: userList}));
        return

    }

    res.render('users', ({users}));

});

app.get('/error', (req, res) => {
    res.render('error', ({error}));

});

app.get('/users/:id', ({params}, res) => {
    const user = users.find(user => user.id === +params.id);
    if (!user) {
        error = 'Такого Користовича не існує або він був видалений...';
        res.redirect('/error');
        return;

    }
    res.render('user', ({user}));


});


app.use((req, res) => {

    res.render('NotFound');

})

app.listen(3200, () => {
    console.log('Servers has started on Port 3200');
});