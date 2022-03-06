import UserController from '../controller/api.controller.user'

module.exports = [
    {
      endpoint: '/users',
      resource: true,
      controller: new UserController()
    }
]