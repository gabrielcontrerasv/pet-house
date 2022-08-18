
const passport = require('passport');
const appointmentsRouter = require('./appointments.router')
const petsRouter = require('./pets.router')
const usersRouter = require('./users.router')
const employeesRouter = require('./employees.router')
const gendersRouter = require('./genders.router')
const specialitieRouter = require('./specilities.router')
const roleRouter = require('./roles.router')
const authRouter = require('./auth.router')
const userRegisterRouter = require('./register.router')

function RouterApi(app){
    app.use('/appointments' ,passport.authenticate("jwt", { session: false }),appointmentsRouter)
    app.use('/pets' ,passport.authenticate("jwt", { session: false }),petsRouter)
    app.use("/users", passport.authenticate("jwt", { session: false }),usersRouter);
    app.use('/employees', passport.authenticate("jwt", { session: false }),employeesRouter)
    app.use('/genders',passport.authenticate("jwt", { session: false }) ,gendersRouter)
    app.use('/specialities',passport.authenticate("jwt", { session: false }) ,specialitieRouter)
    app.use('/roles',passport.authenticate("jwt", { session: false }) ,roleRouter)
    app.use('/auth' ,authRouter)
    app.use('/register' ,userRegisterRouter)
}
module.exports = RouterApi;