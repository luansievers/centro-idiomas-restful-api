'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PreAdhesionSchema extends Schema {
  up () {
    this.create('pre_adhesions', (table) => {
      table.increments()
      table.integer('plan_id').unsigned().references('id').inTable('plans')
      table.integer('branch_id').unsigned().references('id').inTable('branches')
      table.string('name').notNullable()
      table.string('phone',11)
      table.string('email')
      table.string('available')
      table.string('age_range')
      table.string('note')
      table.boolean('is_pending').defaultTo(true)
      table.boolean('is_revoked').defaultTo(false)
      table.string('language')
      table.timestamps()
    })
  }

  down () {
    this.drop('pre_adhesions') 
  }
}

module.exports = PreAdhesionSchema
