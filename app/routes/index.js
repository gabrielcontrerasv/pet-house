
const appointmentsRouter = require('./appointments.router')
const petsRouter = require('./pets.router')
const usersRouter = require('./users.router')
const employeesRouter = require('./employees.router')

function RouterApi(app){
    app.use('/appointments' ,appointmentsRouter)
    app.use('/pets' ,petsRouter)
    app.use('/users' ,usersRouter)
    app.use('/employees' ,employeesRouter)

}


module.exports = RouterApi;