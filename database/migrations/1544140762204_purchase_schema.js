'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PurchaseSchema extends Schema {
  up () {
    this.create('purchases', (table) => {
      table.increments()
      table.integer('product_id').unsigned().references('id').inTable('products')
      table.integer('matriculation_id').unsigned().references('id').inTable('matriculations')
      table.integer('installments').notNullable()
      table.decimal('value').notNullable()//valor
      table.decimal('discount').defaultTo(0)//desconto
      table.date('payDay').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('purchases') 
  }
}

module.exports = PurchaseSchema
