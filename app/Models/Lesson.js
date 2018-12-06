'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Lesson extends Model {

    teacher(){
        return this.belongsTo('App/Models/Teacher')
    }

    matriculations(){
        return this.belongsToMany('App/Models/Matriculation')
    }

}

module.exports = Lesson
