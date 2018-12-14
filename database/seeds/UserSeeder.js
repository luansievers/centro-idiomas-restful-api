'use strict'

const Factory = use('Factory')

class UserSeeder {
  async run () {
    const users = await Factory.model('App/Models/User').createMany(20)

    for (const user of users) {

      const teacher = await Factory.model('App/Models/Teacher').make()
      await user.teacher().save(teacher)
    }
  }
}

module.exports = UserSeeder
