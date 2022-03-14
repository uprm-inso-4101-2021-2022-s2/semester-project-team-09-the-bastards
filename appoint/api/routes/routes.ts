const router = require('express').Router();

import UserController from '../controller/api.controller.user'
import MedicController from '../controller/api.controller.medic'
import AppointmentController from '../controller/api.controller.appoint'
import LoginController from '../controllers/LoginController'
import MedicavailabilityController from '../controllers/MedicavailabilityController'
import OfficeController from '../controllers/OfficeController'
import PatientController from '../controllers/PatientController'
import ReviewController from '../controllers/ReviewController'
import ScheduleController from '../controllers/ScheduleController'


module.exports = [
{
  endpoint: '/users',
  resource: true,
  controller: new UserController()
},
{
  endpoint: '/medics',
  resource: true,
  controller: new MedicController()
},
{
  endpoint: '/appointments',
  resource: true,
  controller: new AppointmentController()
},
{
  endpoint: '/login',
  resource: true,
  controller: new LoginController()
},
{
  endpoint: '/medic_availability',
  resource: true,
  controller: new MedicavailabilityController()
},
{
  endpoint: '/offices',
  resource: true,
  controller: new OfficeController()
},
{
  endpoint: '/patients',
  resource: true,
  controller: new PatientController()
},
{
  endpoint: '/reviews',
  resource: true,
  controller: new ReviewController()
},
{
  endpoint: '/schedules',
  resource: true,
  controller: new ScheduleController()
},
]
