'use strict';

function ModelApi (app){
  app.use(Role)
  app.use(User)
  app.use(Employee)
  app.use(Gender)
  app.use(Pet)
  app.use(Record)
  app.use(Catergorie)
  app.use(Service)
  app.use(Appointment)
  app.use(Role)
}

module.exports = ModelApi;

