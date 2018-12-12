'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Token extends Model {

    changeLogs() {
        return this.hasMany('App/Models/ChangeLog')
    }

}

module.exports = Token
