const Appointment = require('../models/Appointment');

exports.show = async (req, res) => {
  const Appointments = await Appointment.findAll()
  res.json(Appointments)
};

exports.register =  async (req, res) => {
  const { date,description,PetId,serviceId} = req.body
    if (!date  || !description || !PetId || serviceId) {
       res.status(400).send({
           status: false,
           message: 'requieren los datos completos'
       });
   } else {
           const Appoint = await Appointment.create({
           date,
           serviceId,
           description,
           PetId
       })
       res.json(`su numero de cita es ${Appoint.id}`)
   }
 }
 

exports.showById = async (req,res)=>{
  const {id} = req.params;
  const Appoint = await Appointment.findByPk(id)
  res.json(Appoint)
}
exports.updateById = async (req,res)=>{
  const {id} = req.params;
  const Appoint = await Appointment.findByPk(id)
  res.json(Appoint)
}

exports.deleteById = async (req,res)=>{
  const {id} = req.params;
  const appointment = await Appointment.destroy({
    where: {
      id: id
    },
    force: true
  });
  res.send(`cita eliminada`)
}
