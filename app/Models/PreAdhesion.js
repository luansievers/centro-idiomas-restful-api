'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PreAdhesion extends Model {

    plan() {
        return this.belongsTo('App/Models/Plan')
    }

    branch() {
        return this.belongsTo('App/Models/Branch')
    }
    
}

module.exports = PreAdhesion
