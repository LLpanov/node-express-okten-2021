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
}


module.exports = new UserController();





