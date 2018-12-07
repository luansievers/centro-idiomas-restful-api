'use strict'

const Branch = use('App/Models/Branch')

class BranchController {

  async index ({ request, response, view, auth }) {
    const candidato = await Branch.all()
    return branch
  }

  async store ({ request, response, auth }) {
    const data = request.only(['title', 'cep', 'district', 'city', 'state', 'adress', 'phone'])
    const branch = await Branch.create(data)
    return branch
  }

  async show ({ params, request, response, view, auth }) {
    const branch = await Branch.findOrFail(params.id)
    return branch
  }

  async update ({ params, request, response, auth }) {
    const data = request.only(['title', 'cep', 'district', 'city', 'state', 'adress', 'phone'])
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
