'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PurchaseSchema extends Schema {
  up () {
    this.create('purchases', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('purchases')
  }
}

module.exports = PurchaseSchema
