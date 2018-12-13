'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExpenseSchema extends Schema {
  up () {
    this.create('expenses', (table) => {
      table.increments()
      table.integer('category_id').unsigned().references('id').inTable('categories')
      table.integer('account_id').unsigned().references('id').inTable('accounts')
      table.integer('branch_id').unsigned().references('id').inTable('branches')
      table.decimal('value').notNullable()//valor
      table.string('payment_method').notNullable()
      table.date('dueDay').notNullable()//vencimento
      table.date('payDay').nullable()//data de pagamento
      table.string('name').notNullable()
      table.string('description').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('expenses') 
  }
}

module.exports = ExpenseSchema
