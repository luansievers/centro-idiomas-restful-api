'use strict'

const Factory = use('Factory')

class BranchSeeder {
  async run () {
    await Factory.model('App/Models/Branch').createMany(3)
  }
}

module.exports = BranchSeeder
