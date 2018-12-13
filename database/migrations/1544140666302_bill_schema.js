'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BillSchema extends Schema {
  up () {
    this.create('bills', (table) => {
      table.increments()
      table.integer('matriculation_id').unsigned().references('id').inTable('matriculations').notNullable()
      table.integer('account_id').unsigned().references('id').inTable('accounts')
      table.date('dueDay').notNullable()//vencimento
      table.date('payDay').nullable()//data de pagamento
      table.decimal('discount').defaultTo(0)//desconto
      table.decimal('value').notNullable()//valor
      table.decimal('paidValue').nullable()//valorPago
      table.boolean('is_canceled').defaultTo(false)//cancelada
      table.string('payment_method').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('bills') 
  }
}

module.exports = BillSchema
