'use strict'

const Factory = use('Factory')

Factory.blueprint('App/Models/Purchase', (faker) => {
  return {
    installments: faker.d5(),
    value: faker.d100(),
    discount: 0,
    payDay: faker.pickone([null, faker.date({year: 2017})]),
  }
})

Factory.blueprint('App/Models/Category', (faker) => {
  return {
    title: faker.word({ length: 10 }),
    is_expense: faker.pickone([true, false])
  }
})

Factory.blueprint('App/Models/Expense', (faker) => {
  return {
    value: faker.d100(),
    payment_method: faker.pickone(['alpha', 'bravo', 'charlie']),
    dueDay: faker.date({year: 2017}),
    payDay: faker.pickone([null, faker.date({year: 2017})]),
    name: faker.word({ length: 5 }),
    description: faker.sentence({ words: 5 })
  }
})

Factory.blueprint('App/Models/Revanue', (faker) => {
  return {
    value: faker.d100(),
    payment_method: faker.pickone(['alpha', 'bravo', 'charlie']),
    dueDay: faker.date({year: 2017}),
    payDay: faker.pickone([null, faker.date({year: 2017})]),
    name: faker.word({ length: 5 }),
    description: faker.sentence({ words: 5 })
  }
})

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