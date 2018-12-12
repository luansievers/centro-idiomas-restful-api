'use strict'

const Employee = use('App/Models/Employee')

class EmployeeController {

  async index ({ request, response, view, auth }) {
    return await Employee.all()
  }

  async store ({ request, response, auth }) {
    const data = request.all()
    return await Employee.create(data)
  }

  async show ({ params, request, response, view, auth }) {
    return await Employee.findOrFail(params.id)
  }

  async update ({ params, request, response, auth }) {
    const data = request.all()
    const employee = await Employee.findOrFail(params.id)
    employee.merge(data)
    await employee.save()
    return employee
  }

  async destroy ({ params, request, response, auth }) {
    const employee = await Employee.findOrFail(params.id)
    await employee.delete()
  }

}

module.exports = EmployeeController
