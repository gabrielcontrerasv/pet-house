const Employee = require('../models/Employee');

exports.show = async (req, res) => {
        const Employees = await Employee.findAll();
        res.json(Employees)
    }

exports.register =  async (req, res) => {
        const employee = await Employee.create()
      }

exports.showById = async (req,res)=>{
    const {id} = req.params;
    const employee = await Employee.findByPk(id)
    res.json(employee)
  }
  exports.updateById = async (req,res)=>{
    const {id} = req.params;
    const Employee = await Employee.findByPk(id)
    res.json(Employee)
  }


exports.deleteById = async (req,res)=>{
    const {id} = req.params;
    const employee = await Employee.destroy({
        where: {
         id : id
        },
        force:true
    })
    res.send(`el empleado ha sido eliminado`)
  }