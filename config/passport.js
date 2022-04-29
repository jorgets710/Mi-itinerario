// estrategia para autentificar el token 
// instalacion de 2 paquetes npm i passport y npm i passport-jwt
const passport = require("passport")
const jwtStrategy = require("passport-jwt").Strategy
const extractJwt = require("passport-jwt").ExtractJwt

const User = require("../models/user")

module.exports = passport.use(new jwtStrategy({
    // se crea la extrategia
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRETKEY
},
    (jwt_payload, done) => {
        User.findOne({ _id: jwt_payload.id })
            .then(user => {
                console.log(user);
                if (user) {

                    return done(null, user)
                } else if (error) {
                    return done(error, false)
                } else {
                    return done(null, false)
                }
            })
            .catch(error => {
                return done(error, false)
            })

    }))