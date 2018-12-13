'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Matriculation extends Model {

    branch() {
        return this.belongsTo('App/Models/Branch')
    }

    class() {
        return this.belongsTo('App/Models/Class')
    }

    plan() {
        return this.belongsTo('App/Models/Plan')
    }

    student() {
        return this.belongsTo('App/Models/Student')
    }

    purchases() {
        return this.hasMany('App/Models/Purchase')
    }

    bills() {
        return this.hasMany('App/Models/Bill')
    }

    lessons() {
        return this.belongsToMany('App/Models/Lesson')
    }

    product() {
        return this.belongsTo('App/Models/Product')
    }

}

module.exports = Matriculation
