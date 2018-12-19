'use strict'

const Factory = use('Factory')

class UserSeeder {
  async run () {
    await Factory.model('App/Models/User')
      .create(
        {
          username: 'luan.sievers',
          email: 'luan.sievers@gmail.com',
          password: '123456789'
        })
  }
}

module.exports = UserSeeder
