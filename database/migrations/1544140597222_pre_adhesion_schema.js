'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PreAdhesionSchema extends Schema {
  up () {
    this.create('pre_adhesions', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('pre_adhesions') 
  }
}

module.exports = PreAdhesionSchema
