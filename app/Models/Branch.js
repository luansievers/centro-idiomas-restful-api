'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Branch extends Model {

    school(){
        return this.belongsTo('App/Models/School')
    }

    resources(){
        return this.hasMany('App/Models/Resource')
    }

    matriculations(){
        return this.hasMany('App/Models/Matriculation')
    }

}

module.exports = Branch
