const Employee = require('../models/Employee');

exports.show = async (req, res) => {
        const empleados = await Employee.findAll();
        res.json(empleados)
    }