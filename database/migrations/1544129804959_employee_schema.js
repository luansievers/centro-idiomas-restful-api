'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmployeeSchema extends Schema {
  up () {
    this.create('employees', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('photo_url')
      table.string('name').notNullable()
      table.string('cpf',11).notNullable()
      table.string('phone',11).notNullable()//telefone
      table.string('email').notNullable()//telefone
      table.string('cep', 8).notNullable()
      table.string('district').notNullable()//bairro
      table.string('city').notNullable()//cidade
      table.string('state').notNullable()//estado
      table.string('adress').notNullable()//logradouro
      table.string('gender',1).notNullable()//sexo
      table.date('birth_date').notNullable()//data de nascimento
      table.timestamps() 
    })
  }

  down () {
    this.drop('employees')
  }
}

module.exports = EmployeeSchema
