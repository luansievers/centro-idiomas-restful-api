'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {

    purchases() {
        return this.hasMany('App/Models/Purchase')
    }

    stock() {
        return this.hasOne('App/Models/Stock')
    }

    matriculations(){
        return this.hasMany('App/Models/Matriculation')
    }
}

module.exports = Product
