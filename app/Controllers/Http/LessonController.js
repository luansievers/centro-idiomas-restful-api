'use strict'

const Lesson = use('App/Models/Lesson')

class LessonController {

  async index ({ request, response, view, auth }) {
    return await Lesson.all()
  }

  async store ({ request, response, auth }) {
    const data = request.all()
    return await Lesson.create(data)
  }

  async show ({ params, request, response, view, auth }) {
    return await Lesson.findOrFail(params.id)
  }

  async update ({ params, request, response, auth }) {
    const data = request.all()
    const lesson = await Lesson.findOrFail(params.id)
    lesson.merge(data)
    await lesson.save()
    return lesson
  }

  async destroy ({ params, request, response, auth }) {
    const lesson = await Lesson.findOrFail(params.id)
    await lesson.delete()
  }

}

module.exports = LessonController
