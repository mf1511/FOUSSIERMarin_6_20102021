const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        if (req.body.userIed && req.body.userId !== userId) {
            throw 'User ID non valable !';
        } else {
            next();
        }
    }
    catch(error) {
        res.status(401).json({ error: error | 'Requête non identifiée !'})
    }
}