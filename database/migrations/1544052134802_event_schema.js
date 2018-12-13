'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventSchema extends Schema {
  up () {
    this.create('events', (table) => {
      table.increments()
      table.integer('resource_id').unsigned().references('id').inTable('resources').notNullable()
      table.integer('class_id').unsigned().references('id').inTable('classes').notNullable()
      table.integer('teacher_id').unsigned().references('id').inTable('teachers').notNullable()
      table.string('title').notNullable()
      table.datetime('start').notNullable()
      table.datetime('end').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('events') 
  }
}

module.exports = EventSchema
