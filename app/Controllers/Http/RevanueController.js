'use strict'

const Revanue = use('App/Models/Revanue')

class RevanueController {

  async index ({ request, response, view, auth }) {
    return await Revanue.all()
  }

  async store ({ request, response, auth }) {
    const data = request.all()
    return await Revanue.create(data)
  }

  async show ({ params, request, response, view, auth }) {
    return await Revanue.findOrFail(params.id)
  }

  async update ({ params, request, response, auth }) {
    const data = request.all()
    const revanue = await Revanue.findOrFail(params.id)
    revanue.merge(data)
    await revanue.save()
    return revanue
  }

  async destroy ({ params, request, response, auth }) {
    const revanue = await Revanue.findOrFail(params.id)
    await revanue.delete()
  }

}

module.exports = RevanueController
