'use strict'

const User = use('App/Models/User')

class UserSeeder {
  async run () {
    const user = new User()
    user.username = 'luan.sievers'
    user.email = 'luan.sievers@gmail.com'
    user.password = 'safada'
    await user.save()
  }
}

module.exports = UserSeeder
