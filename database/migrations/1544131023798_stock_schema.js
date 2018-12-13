'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StockSchema extends Schema {
  up () {
    this.create('stocks', (table) => {
      table.increments()
      table.integer('product_id').unsigned().references('id').inTable('products')
      table.integer('quantity').defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('stocks') 
  }
}

module.exports = StockSchema
