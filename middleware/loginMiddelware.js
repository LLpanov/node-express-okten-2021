function loginMiddleware(req, res, next) {
    try {
        const {firstName, lastName, age, email, city, password} = req.body;

        if (!email || !password) {
            throw new Error('email or password is not provided');
        }

        if (!firstName) {
            throw new Error('name is not provided');

        }

        if (!lastName) {
            throw new Error('lastName is not provided');
        }

        if (!age) {
            throw new Error('age is not provided');
        }

        if (!city) {
            throw new Error('city is not provided');
        }

        next();
    }
    catch ({message}) {
        res.redirect(`/error?error=${message}`);
    }
}

module.exports = loginMiddleware;



