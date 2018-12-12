'use strict'

const Product = use('App/Models/Product')

class ProductController {

  async index ({ request, response, view, auth }) {
    return await Product.all()
  }

  async store ({ request, response, auth }) {
    const data = request.all()
    return await Product.create(data)
  }

  async show ({ params, request, response, view, auth }) {
    return await Product.findOrFail(params.id)
  }

  async update ({ params, request, response, auth }) {
    const data = request.all()
    const product = await Product.findOrFail(params.id)
    product.merge(data)
    await product.save()
    return product
  }

  async destroy ({ params, request, response, auth }) {
    const product = await Product.findOrFail(params.id)
    await product.delete()
  }

}

module.exports = ProductController
