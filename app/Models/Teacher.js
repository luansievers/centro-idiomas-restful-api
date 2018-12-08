'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Teacher extends Model {

    events() {
        return this.hasMany('App/Models/Event')
    }

    lessons() {
        return this.hasMany('App/Models/Lesson')
    }

    user() {
        return this.belongsTo('App/Models/User')
    }

}

module.exports = Teacher
