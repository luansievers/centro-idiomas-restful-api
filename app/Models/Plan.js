'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Plan extends Model {

    matriculations() {
        return this.hasMany('App/Models/Matriculation')
    }

    branch() {
        return this.belongsTo('App/Models/Branch')
    }

    preAdhesions(){
        return this.hasMany('App/Models/PreAdhesion')
    }
}

module.exports = Plan
