'use strict'

const Account = use('App/Models/Account')

class AccountController {

    async index({ request, response, view, auth }) {
        return await Account.all()
    }

    async store({ request, response, auth }) {
        const data = request.all()
        return await Account.create(data)
    }

    async show({ params, request, response, view, auth }) {
        return await Account.findOrFail(params.id)
    }

    async update({ params, request, response, auth }) {
        const data = request.all()
        const account = await Account.findOrFail(params.id)
        account.merge(data)
        await account.save()
        return account
    }

    async destroy({ params, request, response, auth }) {
        const account = await Account.findOrFail(params.id)
        await account.delete()
    }

}

module.exports = AccountController
