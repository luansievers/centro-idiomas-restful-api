'use strict'

const Teacher = use('App/Models/Teacher')

class TeacherController {

  async index ({ request, response, view, auth }) {
    return await Teacher.all()
  }

  async store ({ request, response, auth }) {
    const data = request.all()
    return await Teacher.create(data)
  }

  async show ({ params, request, response, view, auth }) {
    return await Teacher.findOrFail(params.id)
  }

  async update ({ params, request, response, auth }) {
    const data = request.all()
    const teacher = await Teacher.findOrFail(params.id)
    teacher.merge(data)
    await teacher.save()
    return teacher
  }

  async destroy ({ params, request, response, auth }) {
    const teacher = await Teacher.findOrFail(params.id)
    await teacher.delete()
  }

}

module.exports = TeacherController
