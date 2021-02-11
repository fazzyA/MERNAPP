const jwt = require("jsonwebtoken");
const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token,"test");
        req.userData = {
            email: decodedToken.email,
            userId: decodedToken.id
        }; 
        next();
    } catch (error) {
        res.status(401).json({ message: "Auth failed!" });
    }
};

module.exports = auth