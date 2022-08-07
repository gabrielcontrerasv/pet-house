
const appointmentsRouter = require('./appointments.router')
const petsRouter = require('./pets.router')
const usersRouter = require('./users.router')
const employeesRouter = require('./employees.router')
const gendersRouter = require('./genders.router')
const specialitieRouter = require('./specilities.router')
const roleRouter = require('./roles.router')

function RouterApi(app){
    app.use('/appointments' ,appointmentsRouter)
    app.use('/pets' ,petsRouter)
    app.use('/users' ,usersRouter)
    app.use('/employees' ,employeesRouter)
    app.use('/genders' ,gendersRouter)
    app.use('/specialities' ,specialitieRouter)
    app.use('/roles' ,roleRouter)

}


module.exports = RouterApi;