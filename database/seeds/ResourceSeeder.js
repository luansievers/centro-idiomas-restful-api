'use strict'

const Factory = use('Factory')

const Branch = use('App/Models/Branch')

class ResourceSeeder {
  async dependencies() {
    return [
      'BranchSeeder'
    ]
  }

  async run() {
    const branches = await Branch.all()

    for (const branch of branches.rows) {
      const resources = await Factory.model('App/Models/Resource').makeMany(Math.floor(Math.random() * 5) + 1)
      await branch.resources().saveMany(resources)
    }

  }
}

module.exports = ResourceSeeder
