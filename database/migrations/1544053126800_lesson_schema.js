'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LessonSchema extends Schema {
  up() {
    this.create('lessons', (table) => {
      table.increments()
      table.integer('teacher_id').unsigned().references('id').inTable('teachers').notNullable()
      table.decimal('value').notNullable()//valor
      table.date('lessonDay').notNullable()//data
      table.integer('duration').unsigned()//duração
      table.string('description').notNullable()//descricao
      table.string('competence', 7).notNullable()//competencia
      table.timestamps()
    })
  }

  down() {
    this.drop('lessons')
  }
}

module.exports = LessonSchema
