const passport = require('passport');
const LocalStrategy = require('./strategies/local.strategy')
const verifystrategy = require('./strategies/verify.strategy')
passport.use(LocalStrategy);
passport.use(verifystrategy);