const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

//middleware for verifying JWT tokens
function authenticateJWT(req, res, next){
    const authHeader = req.headers['authorization'];

    if(authHeader == null){
       console.log('Auth header required but NOT PRESENT!');
       return res.sendStatus(401);
    }

    let headers = authHeader.split(' ');
    if(headers.length < 1){
        console.log('Not enough tokens in auth header: ' + headers.length);
        return res.sendStatus(501);
    }
    const token  = authHeader.split(' ')[1];
    if(token == null){
        console.log('Null bearer toekn');
        return res.sendStatus(401);
    }
    const verfied = jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err){
            return res.sendStatus(401).json('Token Validation Error!');
        }
        req.auth = verified;
    });
    next();
}

//import controllers for routing
const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');

router
    .route('/register')
    .post(authController.register);

router
    .route('/login')
    .post(authController.login);

//define routes  for our trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(authenticateJWT,tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(authenticateJWT,tripsController.tripsUpdateTrip);

module.exports = router;