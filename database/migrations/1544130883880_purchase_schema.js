'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PurchaseSchema extends Schema {
  up () {
    this.create('purchases', (table) => {
      table.increments()
      table.integer('product_id').unsigned().references('id').inTable('products')
      table.timestamps()
    })
  }

  down () {
    this.drop('purchases')
  }
}

module.exports = PurchaseSchema
