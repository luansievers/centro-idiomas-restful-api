'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LessonSchema extends Schema {
  up () {
    this.create('lessons', (table) => {
      table.increments()
      table.integer('teacher_id').unsigned().references('id').inTable('teachers').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('lessons') 
  }
}

module.exports = LessonSchema
