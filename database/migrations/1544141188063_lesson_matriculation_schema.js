'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LessonMatriculationSchema extends Schema {
  up () {
    this.create('lesson_matriculation', (table) => {
      table.increments()
      table.integer('lesson_id').unsigned().references('id').inTable('lessons')
      table.integer('matriculation_id').unsigned().references('id').inTable('matriculations')
      table.boolean('is_present').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('lesson_matriculation') 
  }
}

module.exports = LessonMatriculationSchema
