'use strict'

const Resource = use('App/Models/Resource')

class ResourceController {

  async index ({ request, response, view, auth }) {
    return await Resource.all()
  }

  async store ({ request, response, auth }) {
    const data = request.all()
    return await Resource.create(data)
  }

  async show ({ params, request, response, view, auth }) {
    return await Resource.findOrFail(params.id)
  }

  async update ({ params, request, response, auth }) {
    const data = request.all()
    const resource = await Resource.findOrFail(params.id)
    resource.merge(data)
    await resource.save()
    return resource
  }

  async destroy ({ params, request, response, auth }) {
    const resource = await Resource.findOrFail(params.id)
    await resource.delete()
  }

}

module.exports = ResourceController
