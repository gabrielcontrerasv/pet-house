const Record = require('../models/Record');

exports.show = async (req, res) => {
  const records = await Record.findAll()
  res.json(records)
};

exports.register =  async (req, res) => {
  const {PetId,diagnosis,record,treatment,date} = req.body;
  if (!req.body.PetId || !req.body.diagnosis) {
    res.status(400).send({
        status: false,
        message: 'requieren los datos completos'
    });
  }
  else {
    const regRecord = await Record.create(
      {
        PetId,
        record,
        diagnosis,
        treatment,
        date
      }
    )
    res.send(`se le ha hecho un cambio a la historia del ${regRecord.record} de la Mascota y se ha sido guardado correctamente`)
  }
}

exports.showByPet = async (req,res)=>{
  const {id} = req.body;
  const RecordsPet = await Record.findAll({
    where: { PetId: id },
  });
  res.json(RecordsPet)
}
