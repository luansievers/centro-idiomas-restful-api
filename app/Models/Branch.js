'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Branch extends Model {

    resources() {
        return this.hasMany('App/Models/Resource')
    }

    matriculations() {
        return this.hasMany('App/Models/Matriculation')
    }

    plans() {
        return this.hasMany('App/Models/Plan')
    }
}

module.exports = Branch
