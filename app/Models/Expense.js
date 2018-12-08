'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Expense extends Model {

    account() {
        return this.belongsTo('App/Model/Account')
    }

    category() {
        return this.belongsTo('App/Model/Category')
    }

}

module.exports = Expense
