'use strict'

const Event = use('App/Models/Event')

class EventController {

  async index ({ request, response, view, auth }) {
    return await Event.all()
  }

  async store ({ request, response, auth }) {
    const data = request.all()
    return await Event.create(data)
  }

  async show ({ params, request, response, view, auth }) {
    return await Event.findOrFail(params.id)
  }

  async update ({ params, request, response, auth }) {
    const data = request.all()
    const event = await Event.findOrFail(params.id)
    event.merge(data)
    await event.save()
    return event
  }

  async destroy ({ params, request, response, auth }) {
    const event = await Event.findOrFail(params.id)
    await event.delete()
  }

}

module.exports = EventController
