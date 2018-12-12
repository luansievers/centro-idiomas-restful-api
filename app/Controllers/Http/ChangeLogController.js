'use strict'

const ChangeLog = use('App/Models/ChangeLog')

class ChangeLogController {

  async index ({ request, response, view, auth }) {
    return await ChangeLog.all()
  }

  async show ({ params, request, response, view, auth }) {
    return await ChangeLog.findOrFail(params.id)
  }
}

module.exports = ChangeLogController
