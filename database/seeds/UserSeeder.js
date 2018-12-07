'use strict'

const User = use('App/Models/User')

class UserSeeder {
  async run () {
    const data = {}
    data.username = 'luan.sievers'
    data.email = 'luan.sievers@gmail.com'
    data.password = 'safada'
    await User.create(data)
  }
}

module.exports = UserSeeder
