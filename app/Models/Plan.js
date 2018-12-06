'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Plan extends Model {

    matriculations(){
        return this.hasMany('App/Models/Matriculation')
    }

}

module.exports = Plan
