'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Account extends Model {

    expenses() {
        return this.hasMany('App/Models/Expense')
    }

    revanues() {
        return this.hasMany('App/Models/Revanue')
    }

    bills() {
        return this.hasMany('App/Models/Bill')
    }
}

module.exports = Account
