'use strict'

const Branch = use('App/Models/Branch')

class BranchController {

  async index ({ request, response, view, auth }) {
    return await Branch.all()
  }

  async store ({ request, response, auth }) {
    const data = request.all()
    return await Branch.create(data)
  }

  async show ({ params, request, response, view, auth }) {
    return await Branch.findOrFail(params.id)
  }

  async update ({ params, request, response, auth }) {
    const data = request.all()
    const branch = await Branch.findOrFail(params.id)
    branch.merge(data)
    await branch.save()
    return branch
  }

  async destroy ({ params, request, response, auth }) {
    const branch = await Branch.findOrFail(params.id)
    await branch.delete()
  }

}

module.exports = BranchController
