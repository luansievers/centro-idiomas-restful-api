'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BranchSchema extends Schema {
  up () {
    this.create('branches', (table) => {
      table.increments()
      table.string('title').notNullable()
      table.string('cep', 8).notNullable()
      table.string('district').notNullable()
      table.string('city').notNullable()
      table.string('state').notNullable()
      table.string('address').notNullable()
      table.string('phone',11).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('branches')
  }
}

module.exports = BranchSchema
