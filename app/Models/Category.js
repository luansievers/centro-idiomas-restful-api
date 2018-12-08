'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {

    expenses() {
        return this.hasMany('App/Models/Expense')
    }

    revanues() {
        return this.hasMany('App/Models/Revanue')
    }

}

module.exports = Category
