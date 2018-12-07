'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BillSchema extends Schema {
  up () {
    this.create('bills', (table) => {
      table.increments()
      table.integer('matriculation_id').unsigned().references('id').inTable('matriculations').notNullable()
      table.date('dueDay').notNullable()//vencimento
      table.date('payDay').nullable()//data de pagamento
      table.decimal('discount').defaultTo(0)//desconto
      table.decimal('value').notNullable()//valor
      table.decimal('paidValue').nullable()//valorPago
      table.boolean('canceled').defaultTo(false)//cancelada
      table.timestamps()
    })
  }

  down () {
    this.drop('bills')
  }
}

module.exports = BillSchema
