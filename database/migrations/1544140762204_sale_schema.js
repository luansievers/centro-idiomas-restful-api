'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SaleSchema extends Schema {
  up () {
    this.create('sales', (table) => {
      table.increments()
      table.integer('product_id').unsigned().references('id').inTable('products')
      table.integer('matriculation_id').unsigned().references('id').inTable('matriculations')
      table.timestamps()
    })
  }

  down () {
    this.drop('sales')
  }
}

module.exports = SaleSchema
