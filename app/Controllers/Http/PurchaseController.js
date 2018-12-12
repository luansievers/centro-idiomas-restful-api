'use strict'

const Purchase = use('App/Models/Purchase')

class PurchaseController {

  async index ({ request, response, view, auth }) {
    return await Purchase.all()
  }

  async store ({ request, response, auth }) {
    const data = request.all()
    return await Purchase.create(data)
  }

  async show ({ params, request, response, view, auth }) {
    return await Purchase.findOrFail(params.id)
  }

  async update ({ params, request, response, auth }) {
    const data = request.all()
    const purchase = await Purchase.findOrFail(params.id)
    purchase.merge(data)
    await purchase.save()
    return purchase
  }

  async destroy ({ params, request, response, auth }) {
    const purchase = await Purchase.findOrFail(params.id)
    await purchase.delete()
  }

}

module.exports = PurchaseController
