'use strict'

const Factory = use('Factory')

class ProductionSeeder {

  async run() {

    await Factory.model('App/Models/User')
      .create(
        {
          username: 'luan.sievers',
          email: 'luan.sievers@gmail.com',
          password: '123456789'
        })

    await Factory.model('App/Models/Branch')
      .create(
        {
          title: 'Videira',
          cep: '89560000',
          district: '123456789',
          city: 'Videira',
          state: 'Santa Catarina',
          address: 'Rua Xv de Novembro, 576, 1º andar',
          phone: '49991503330'
        })

    await Factory.model('App/Models/Branch')
      .create(
        {
          title: 'Fraiburgo',
          cep: '89560000',
          district: '123456789',
          city: 'Fraiburgo',
          state: 'Santa Catarina',
          address: 'Rua Xv de Novembro, 576, 1º andar',
          phone: '49991503330'
        })

    await Factory.model('App/Models/Branch')
      .create(
        {
          title: 'Arroio Trinta',
          cep: '89560000',
          district: '123456789',
          city: 'Arroio Trinta',
          state: 'Santa Catarina',
          address: 'Rua Xv de Novembro, 576, 1º andar',
          phone: '49991503330'
        })

    await Factory.model('App/Models/Branch')
      .create(
        {
          title: 'Caçador',
          cep: '89560000',
          district: '123456789',
          city: 'Caçador',
          state: 'Santa Catarina',
          address: 'Rua Xv de Novembro, 576, 1º andar',
          phone: '49991503330'
        })
  }
}

module.exports = ProductionSeeder
