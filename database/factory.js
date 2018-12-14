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

Factory.blueprint('App/Models/Resource', (faker) => {
  return {
    title: faker.sentence({ words: 2 })
  }
})

Factory.blueprint('App/Models/Class', (faker) => {
  return {
    title: faker.animal()
  }
})

Factory.blueprint('App/Models/User', (faker) => {
  return {
    username: faker.name(),
    email: faker.email(),
    password: faker.string()
  }
})

Factory.blueprint('App/Models/Teacher', (faker) => {
  return {
    name: faker.name(),
    cpf: faker.cpf().replace(/\D/g, ''),
    phone: faker.phone({ formatted: false, country: 'br' }),
    cep: faker.zip(),
    district: faker.province(),
    city: faker.city(),
    state: faker.state(),
    address: faker.address(),
    gender: faker.character({ pool: 'fm' })
  }
})