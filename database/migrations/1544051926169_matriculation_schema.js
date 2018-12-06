'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MatriculationSchema extends Schema {
  up () {
    this.create('matriculations', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('matriculations')
  }
}

module.exports = MatriculationSchema
