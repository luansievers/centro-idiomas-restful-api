'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Resource extends Model {

    branch(){
        return this.belongsTo('App/Models/Branch')
    }

    events(){
        return this.hasMany('App/Models/Event')
    }

}

module.exports = Resource
