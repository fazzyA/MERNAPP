const jwt = require("jsonwebtoken");
const auth = async (req, res, next) => {
    try {
        console.log(req.headers)
        const token = req.headers.authorization;
        const decodedToken = jwt.verify(token,"test");
        req.userData = {
            email: decodedToken.email,
            id: decodedToken.id
        }; 
        next();
    } catch (error) {
        res.status(401).json({ message: "Auth failed!" });
    }
};

module.exports = auth