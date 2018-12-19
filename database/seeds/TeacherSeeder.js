'use strict'

const Factory = use('Factory')

class TeacherSeeder {
  async run () {
    const users = await Factory.model('App/Models/User').createMany(16)

    for (const user of users) {
      const teacher = await Factory.model('App/Models/Teacher').make()
      await user.teacher().save(teacher)
    }
  }
}

module.exports = TeacherSeeder
