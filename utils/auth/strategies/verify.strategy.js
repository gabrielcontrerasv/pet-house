const jwt = require("jsonwebtoken");
const passportJWT = require("passport-jwt");
const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;


const user = require('../../../app/database/models/User')

verifystrategy =  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: "secret",
    },
    function (jwtPayload, callback) {
      console.log(jwtPayload);
      return user.findByPk(jwtPayload.id)
        .then((user) => {
          return callback(null, user);
        })
        .catch((err) => {
          return callback(err);
        });
    }
  )
module.exports = verifystrategy;