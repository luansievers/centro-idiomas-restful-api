'use strict'

const Student = use('App/Models/Student')

class StudentController {

  async index ({ request, response, view, auth }) {
    return await Student.all()
  }

  async store ({ request, response, auth }) {
    const data = request.all()
    return await Student.create(data)
  }

  async show ({ params, request, response, view, auth }) {
    return await Student.findOrFail(params.id)
  }

  async update ({ params, request, response, auth }) {
    const data = request.all()
    const student = await Student.findOrFail(params.id)
    student.merge(data)
    await student.save()
    return student
  }

  async destroy ({ params, request, response, auth }) {
    const student = await Student.findOrFail(params.id)
    await student.delete()
  }

}

module.exports = StudentController
