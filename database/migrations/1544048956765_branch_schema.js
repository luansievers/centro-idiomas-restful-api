'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BranchSchema extends Schema {
  up () {
    this.create('branches', (table) => {
      table.increments()
      table.string('title').notNullable()
      table.string('cep', 8).notNullable()
      table.string('district').notNullable()//bairro
      table.string('city').notNullable()//cidade
      table.string('state').notNullable()//estado
      table.string('adress').notNullable()//logradouro
      table.string('phone',11).notNullable()//telefone
      table.timestamps()
    })
  }

  down () {
    this.drop('branches')
  }
}

module.exports = BranchSchema
