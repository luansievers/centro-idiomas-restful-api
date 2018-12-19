'use strict'

const Factory = use('Factory')

class ClassSeeder {
  async run () {
    const classes = await Factory.model('App/Models/Class').createMany(50)
  }
}

module.exports = ClassSeeder
