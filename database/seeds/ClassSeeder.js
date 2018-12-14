'use strict'

const Factory = use('Factory')

class ClassSeeder {
  async run () {
    const classes = await Factory.model('App/Models/Class').createMany(100)
  }
}

module.exports = ClassSeeder
