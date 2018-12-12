'use strict'

const Stock = use('App/Models/Stock')

class StockController {

  async index ({ request, response, view, auth }) {
    return await Stock.all()
  }

  async store ({ request, response, auth }) {
    const data = request.all()
    return await Stock.create(data)
  }

  async show ({ params, request, response, view, auth }) {
    return await Stock.findOrFail(params.id)
  }

  async update ({ params, request, response, auth }) {
    const data = request.all()
    const stock = await Stock.findOrFail(params.id)
    stock.merge(data)
    await stock.save()
    return stock
  }

  async destroy ({ params, request, response, auth }) {
    const stock = await Stock.findOrFail(params.id)
    await stock.delete()
  }

}

module.exports = StockController
