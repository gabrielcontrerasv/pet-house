const bcrypt= require('bcrypt');
const jwt = require("jsonwebtoken");
const boom = require('@hapi/boom')
const {Strategy } = require('passport-local');
const UserController = require('../../../app/database/models/User');

const LocalStrategy = new Strategy(async (email , password , done )=>{
try {
    const user = await UserController.findOne({
        where: { email },
    });    
    if(!user){
        done(boom.unauthorized(),false);
    }
    const Match = await bcrypt.compare(password, user.password)
    if(!Match){
        done(boom.unauthorized(),false);
    }
    const token = jwt.sign(JSON.stringify(user), "secret");

    done(null,{...user.dataValues,token})


} catch (error) {
    done(error);
}

})
module.exports = LocalStrategy;