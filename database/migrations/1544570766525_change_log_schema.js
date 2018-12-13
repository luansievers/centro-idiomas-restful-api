'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChangeLogSchema extends Schema {
  up () {
    this.create('change_logs', (table) => {
      table.increments()
      table.integer('token_id').unsigned().references('id').inTable('tokens')
      table.string('method')
      table.string('url')
      table.string('data')
      table.timestamps()
    })
  }

  down () {
    this.drop('change_logs') 
  }
}

module.exports = ChangeLogSchema
