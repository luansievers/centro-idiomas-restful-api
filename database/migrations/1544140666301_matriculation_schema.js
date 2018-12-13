'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MatriculationSchema extends Schema {
  up () {
    this.create('matriculations', (table) => {
      table.increments()
      table.integer('plan_id').unsigned().references('id').inTable('plans').notNullable()
      table.integer('branch_id').unsigned().references('id').inTable('branches').notNullable()
      table.integer('class_id').unsigned().references('id').inTable('classes').notNullable()
      table.integer('student_id').unsigned().references('id').inTable('students').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('matriculations') 
  }
}

module.exports = MatriculationSchema
