'use strict'

const Expense = use('App/Models/Expense')

class ExpenseController {
    
  async index ({ request, response, view, auth }) {
    return await Expense.all()
  }

  async store ({ request, response, auth }) {
    const data = request.all()
    return await Expense.create(data)
  }

  async show ({ params, request, response, view, auth }) {
    return await Expense.findOrFail(params.id)
  }

  async update ({ params, request, response, auth }) {
    const data = request.all()
    const expense = await Expense.findOrFail(params.id)
    expense.merge(data)
    await expense.save()
    return expense
  }

  async destroy ({ params, request, response, auth }) {
    const expense = await Expense.findOrFail(params.id)
    await expense.delete()
  }

}

module.exports = ExpenseController
