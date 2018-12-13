'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlanSchema extends Schema {
  up () {
    this.create('plans', (table) => {
      table.increments()
      table.integer('branch_id').unsigned().references('id').inTable('branches').notNullable()
      table.string('title').notNullable()
      table.decimal('value').notNullable()//valor
      table.integer('duration').unsigned()//duração
      table.boolean('is_active').defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('plans')
  }
}

module.exports = PlanSchema
