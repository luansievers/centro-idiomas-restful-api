'use strict'

const Factory = use('Factory')

Factory.blueprint('App/Models/Branch', (faker) => {
  return {
    title: faker.company(),
    cep: faker.zip(),
    district: faker.province(),
    city: faker.city(),
    state: faker.state(),
    address: faker.address(),
    phone: faker.phone({ formatted: false, country: 'br' }),
  }
})
