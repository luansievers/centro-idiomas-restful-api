'use strict'

const Factory = use('Factory')

class BranchSeeder {
  async run() {
    const branches = await Factory.model('App/Models/Branch').createMany(3)

    for (const branch of branches) {

      const resources = await Factory.model('App/Models/Resource').makeMany(Math.floor(Math.random() * 10) +1)
      await branch.resources().saveMany(resources)
    }
  }
}

module.exports = BranchSeeder
