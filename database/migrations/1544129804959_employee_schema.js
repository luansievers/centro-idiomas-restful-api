'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmployeeSchema extends Schema {
  up () {
    this.create('employees', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('employees')
  }
}

module.exports = EmployeeSchema
