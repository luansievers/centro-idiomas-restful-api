'use strict'

const Factory = use('Factory')

class BranchSeeder {
  async run() {
    await Factory.model('App/Models/Branch')
      .create(
        {
          title: 'Videira',
          cep: '89560000',
          district: 'Centro',
          city: 'Videira',
          state: 'Santa Catarina',
          address: 'Rua Xv de Novembro, 576, 1º andar',
          phone: '49991503330'
        })
        
    await Factory.model('App/Models/Branch')
      .create(
        {
          title: 'Fraiburgo',
          cep: '00000000',
          district: 'Não informado',
          city: 'Fraiburgo',
          state: 'Santa Catarina',
          address: 'Não informado',
          phone: '00000000000'
        })

    await Factory.model('App/Models/Branch')
      .create(
        {
          title: 'Arroio Trinta',
          cep: '00000000',
          district: 'Não informado',
          city: 'Arroio Trinta',
          state: 'Santa Catarina',
          address: 'Não informado',
          phone: '00000000000'
        })

    await Factory.model('App/Models/Branch')
      .create(
        {
          title: 'Caçador',
          cep: '00000000',
          district: 'Não informado',
          city: 'Caçador',
          state: 'Santa Catarina',
          address: 'Não informado',
          phone: '00000000000'
        })

  }
}

module.exports = BranchSeeder
