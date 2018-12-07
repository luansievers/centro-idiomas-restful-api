'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Bill extends Model {

    matriculation(){
        return this.belongsTo('App/Models/Matriculation')
    }

    

}

module.exports = Bill