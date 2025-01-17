'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Purchase extends Model {

    matriculation() {
        return this.belongsTo('App/Models/Matriculation')
    }

    product() {
        return this.belongsTo('App/Models/Product')
    }

}

module.exports = Purchase
