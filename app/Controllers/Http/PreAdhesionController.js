'use strict'

const PreAdhesion = use('App/Models/PreAdhesion')

class PreAdhesionController {

  async index ({ request, response, view, auth }) {
    return await PreAdhesion.all()
  }

  async store ({ request, response, auth }) {
    const data = request.all()
    return await PreAdhesion.create(data)
  }

  async show ({ params, request, response, view, auth }) {
    return await PreAdhesion.findOrFail(params.id)
  }

  async update ({ params, request, response, auth }) {
    const data = request.all()
    const preAdhesion = await PreAdhesion.findOrFail(params.id)
    preAdhesion.merge(data)
    await preAdhesion.save()
    return preAdhesion
  }

  async destroy ({ params, request, response, auth }) {
    const preAdhesion = await PreAdhesion.findOrFail(params.id)
    await preAdhesion.delete()
  }

}

module.exports = PreAdhesionController
