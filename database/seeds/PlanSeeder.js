'use strict'

const Factory = use('Factory')

class PlanSeeder {
  async run () {
    await Factory.model('App/Models/Plan')
      .make(
        {
          title: 'AULA AVULSA',
          value: 35,
          duration: 60,
          is_revoked: false
        })
  }
}

module.exports = PlanSeeder
