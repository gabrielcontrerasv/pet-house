const {Employee} = require('../database/db');

module.exports = {
    async all(req,res){
        let employees = await Employee.findAll();
        res.json(employees)
    }
}