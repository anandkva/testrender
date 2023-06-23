const jwt = require('jsonwebtoken');

exports.isAuth = async (req, res, next) => {

    const { cookies } = req.headers;
    console.log("res", cookies)

    // console.log(req.cookies.accessToken);
    if (cookies) {

        let user = jwt.verify(cookies, "Test")

        req.user = user;
        if (!req.user) {
            return res.status(401).send({ messsage: 'Not Authorized!' })
        };

        return next();
    }
    res.status(401).send({ messsage: "Not Authorize,No accessToken" })
}