'use strict'

const Class = use('App/Models/Class')

class ClassController {

  async index ({ request, response, view, auth }) {
    return await Class.all()
  }

  async store ({ request, response, auth }) {
    const data = request.all()
    return await Class.create(data)
  }

  async show ({ params, request, response, view, auth }) {
    return await Class.findOrFail(params.id)
  }

  async update ({ params, request, response, auth }) {
    const data = request.all()
    const classs = await Class.findOrFail(params.id)
    classs.merge(data)
    await classs.save()
    return classs
  }

  async destroy ({ params, request, response, auth }) {
    const classs = await Class.findOrFail(params.id)
    await classs.delete()
  }

}

module.exports = ClassController
