'use strict'

const Bill = use('App/Models/Bill')

class BillController {

    async index({ request, response, view, auth }) {
        return await Bill.all()
    }

    async store({ request, response, auth }) {
        const data = request.all()
        return await Bill.create(data)
    }

    async show({ params, request, response, view, auth }) {
        return await Bill.findOrFail(params.id)
    }

    async update({ params, request, response, auth }) {
        const data = request.all()
        const bill = await Bill.findOrFail(params.id)
        bill.merge(data)
        await bill.save()
        return bill
    }

    async destroy({ params, request, response, auth }) {
        const bill = await Bill.findOrFail(params.id)
        await bill.delete()
    }

}

module.exports = BillController
