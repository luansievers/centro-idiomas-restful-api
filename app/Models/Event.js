'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Event extends Model {

    resource() {
        return this.belongsTo('App/Models/Resource')
    }

    class() {
        return this.belongsTo('App/Models/Class')
    }

    teacher() {
        return this.belongsTo('App/Models/Teacher')
    }

}

module.exports = Event
