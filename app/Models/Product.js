'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {

    sales(){
        return this.hasMany('App/Models/Sale')
    }

    purchases(){
        return this.hasMany('App/Models/Purchase')
    }

    stock(){
        return this.hasOne('App/Models/Stock')
    }
}

module.exports = Product