const bcrypt= require('bcrypt');
const boom = require('@hapi/boom')
const {Strategy } = require('passport-local');
const UserController = require('../../../app/database/controllers/user.controller');

const LocalStrategy = new Strategy(async (email , password , done )=>{
try {
    const user = await UserController.showByEmail(email);    
    if(!user){
        done(Boom.unautorized(),false);
    }
    const Match = await bcrypt.compare(password, user.password)
    if(!Match){
        done(Boom.unautorized(),false);
    }

    done(null,user)
} catch (error) {
    done(error);
}

})
module.exports = LocalStrategy;