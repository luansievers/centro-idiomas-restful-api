'use strict'

const Plan = use('App/Models/Plan')

class PlanController {

  async index ({ request, response, view, auth }) {
    return await Plan.all()
  }

  async store ({ request, response, auth }) {
    const data = request.all()
    return await Plan.create(data)
  }

  async show ({ params, request, response, view, auth }) {
    return await Plan.findOrFail(params.id)
  }

  async update ({ params, request, response, auth }) {
    const data = request.all()
    const plan = await Plan.findOrFail(params.id)
    plan.merge(data)
    await plan.save()
    return plan
  }

  async destroy ({ params, request, response, auth }) {
    const plan = await Plan.findOrFail(params.id)
    await plan.delete()
  }

}

module.exports = PlanController
