'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Class extends Model {

    matriculations() {
        return this.hasMany('App/Models/Matriculation')
    }

    events() {
        return this.hasMany('App/Models/Event')
    }

}

module.exports = Class
