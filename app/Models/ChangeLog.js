'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ChangeLog extends Model {

    token() {
        return this.belongsTo('App/Models/Token')
    }

}

module.exports = ChangeLog
