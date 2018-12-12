'use strict'

const Matriculation = use('App/Models/Matriculation')

class MatriculationController {

  async index ({ request, response, view, auth }) {
    return await Matriculation.all()
  }

  async store ({ request, response, auth }) {
    const data = request.all()
    return await Matriculation.create(data)
  }

  async show ({ params, request, response, view, auth }) {
    return await Matriculation.findOrFail(params.id)
  }

  async update ({ params, request, response, auth }) {
    const data = request.all()
    const matriculation = await Matriculation.findOrFail(params.id)
    matriculation.merge(data)
    await matriculation.save()
    return matriculation
  }

  async destroy ({ params, request, response, auth }) {
    const matriculation = await Matriculation.findOrFail(params.id)
    await matriculation.delete()
  }

}

module.exports = MatriculationController
