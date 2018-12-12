'use strict'

const Category = use('App/Models/Category')

class CategoryController {

  async index ({ request, response, view, auth }) {
    return await Category.all()
  }

  async store ({ request, response, auth }) {
    const data = request.all()
    return await Category.create(data)
  }

  async show ({ params, request, response, view, auth }) {
    return await Category.findOrFail(params.id)
  }

  async update ({ params, request, response, auth }) {
    const data = request.all()
    const category = await Category.findOrFail(params.id)
    category.merge(data)
    await category.save()
    return category
  }

  async destroy ({ params, request, response, auth }) {
    const category = await Category.findOrFail(params.id)
    await category.delete()
  }

}

module.exports = CategoryController
