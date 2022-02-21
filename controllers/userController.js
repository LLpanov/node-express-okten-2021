const users = require('../db/users');

class UserController {
    renderUsers({query}, res) {
        if (Object.keys(query).length) {
            let userList = [...users];
            if (query.age) {
                userList = userList.filter(user => user.age === query.age);
            }
            if (query.city) {
                userList = userList.filter(user => user.city === query.city);
            }
            res.render('users', ({users: userList}));

        }
        res.render('users', ({users}));
    }

    getUserById({params}, res) {
        const user = users.find(user => user.id === +params.id);
        res.render('user', ({user}));

    }

    getUserDelete({params}, res) {
        const {id} = params;
        const userDel = users[id - 1]
        users.splice(users.indexOf(userDel), 1);
        res.redirect('/users');

    }
}

module.exports = new UserController();





