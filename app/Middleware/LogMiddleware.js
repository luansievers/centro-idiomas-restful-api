'use strict'

const ChangeLong = use('App/Models/ChangeLog')

class LogMiddleware {

  async handle({ request, auth }, next) {

    if (request.method() === 'POST' || request.method() === 'PUT' || request.method() === 'DELETE') {
      const changeLog = new ChangeLong()

      changeLog.method = request.method()
      changeLog.url = request.url()
      changeLog.data = JSON.stringify(request.all())

      try {
        await auth.getUser()
        const token = await auth.listTokens()
        changeLog.token_id = token[0].id
      } catch (error) {
        changeLog.token_id = null
      }

      changeLog.save()
    }

    await next()
  }
}

module.exports = LogMiddleware
