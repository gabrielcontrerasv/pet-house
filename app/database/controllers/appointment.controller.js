const Appointment = require('../models/Appointment');
exports.show = async (req, res) => {
  const Appointments = await Appointment.findAll()
  res.json(Appointments)
};

exports.registro =  async (req, res) => {
  const Appointment = await Appointment.create()
}

exports.showById = async (req,res)=>{
  const {id} = req.params;
  const Appoint = await Appointment.findByPk(id)
  res.json(Appoint)
}

exports.delete = async (req,res)=>{
  const {id} = req.params;
  const appointment = await Appointment.destroy({
    where: {
      id: id
    },
    force: true
  });
  res.send(`cita eliminada`)
}
