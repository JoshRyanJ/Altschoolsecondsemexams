const Passport = require ("passport")
const ExtractJwt = require("passport-jwt").ExtractJwt
const JwtStrategy = require("passport-jwt").JwtStrategy

const config = require("../config/config")
const userModel = require("../models/user")
const blogModel = require("..models/blog")

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrkey = config.secretOrkey

exports.jwtPassport = passport.use(new JwtStrategy(opts,async(payload, done)) =>{
    const user =await userModel.findById(payload.id)
    try {
        return done(null, user)

    }
    catch (er) {
        return done(error, false)
    }
}

exports.verifyUser =passport.authenticate 'jwt', {session : false})
