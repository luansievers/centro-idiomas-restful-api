'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Student extends Model {

    matriculations() {
        return this.hasMany('App/Models/Matriculation')
    }

    user() {
        return this.belongsTo('App/Models/User')
    }

}

module.exports = Student
