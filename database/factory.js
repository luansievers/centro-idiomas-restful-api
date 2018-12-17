'use strict'

const Factory = use('Factory')

Factory.blueprint('App/Models/User', (faker) => {
  return {
    username: faker.name(),
    email: faker.email(),
    password: faker.string()
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
    title: faker.animal(),
    is_revoked: faker.pickone([true, false])
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

Factory.blueprint('App/Models/Event', (faker) => {
  return {
    title: faker.sentence({ words: 5 }),
    start: faker.date({year: 2017}),
    end: faker.date({year: 2017}),
  }
})

Factory.blueprint('App/Models/Plan', (faker) => {
  return {
    title: faker.animal(),
    value: faker.d100(),
    duration: faker.d120(),
    is_revoked: faker.pickone([true, false])
  }
})

Factory.blueprint('App/Models/Student', (faker) => {
  return {
    photo_url: faker.url({extensions: ['jpg', 'png']}),
    name: faker.name(),
    cpf: faker.cpf().replace(/\D/g, ''),
    phone: faker.phone({ formatted: false, country: 'br' }),
    email: faker.email(),
    cep: faker.zip(),
    district: faker.province(),
    city: faker.city(),
    state: faker.state(),
    address: faker.address(),
    gender: faker.character({ pool: 'fm' }),
    birth_date: faker.date({year: 2017})
  }
})

Factory.blueprint('App/Models/Account', (faker) => {
  return {
    title: faker.animal()
  }
})

Factory.blueprint('App/Models/Lesson', (faker) => {
  return {
    value: faker.d100(),
    lessonDay: faker.date({year: 2017}),
    duration: faker.d120(),
    description: faker.sentence({ words: 5 }),
    competence: faker.date({string: true, american: false}).substring(3)
  }
})

Factory.blueprint('App/Models/Employee', (faker) => {
  return {
    photo_url: faker.url({extensions: ['jpg', 'png']}),
    name: faker.name(),
    cpf: faker.cpf().replace(/\D/g, ''),
    phone: faker.phone({ formatted: false, country: 'br' }),
    email: faker.email(),
    cep: faker.zip(),
    district: faker.province(),
    city: faker.city(),
    state: faker.state(),
    address: faker.address(),
    gender: faker.character({ pool: 'fm' }),
    birth_date: faker.date({year: 2017})
  }
})

Factory.blueprint('App/Models/Product', (faker) => {
  return {
    name: faker.name(),
    value: faker.d100()
  }
})

Factory.blueprint('App/Models/Stock', (faker) => {
  return {
    quantity: faker.d10()
  }
})

Factory.blueprint('App/Models/PreAdhesion', (faker) => {
  return {
    name: faker.name(),
    phone: faker.phone({ formatted: false, country: 'br' }),
    email: faker.email(),
    available: faker.sentence({ words: 5 }),
    age_range: faker.pickone(['Adulto', 'Criança', 'Adolescente']),
    note: faker.sentence({ words: 5 }),
    is_pending: faker.pickone([true, false]),
    is_revoked: faker.pickone([true, false]),
    language: faker.pickone(['Language 1', 'Language 2', 'Language 3'])
  }
})

Factory.blueprint('App/Models/Matriculation', (faker) => {
  return {
    number: faker.natural(),
    is_revoked: faker.pickone([true, false]),
    is_overdue: faker.pickone([true, false]),
    dueDay: faker.pickone([null, faker.date({year: 2017})]),
    stage: faker.pickone(['Stage 01', 'Conversation', 'Stage 2']),
    billing_cycle: faker.pickone(['semanal', 'mensal', 'avulso'])
  }
})

Factory.blueprint('App/Models/Bill', (faker) => {
  return {
    payment_method: faker.pickone(['alpha', 'bravo', 'charlie']),
    is_canceled: faker.pickone([true, false]),
    paidValue: faker.d100(),
    value: faker.d100(),
    discount: 0,
    dueDay: faker.pickone([null, faker.date({year: 2017})]),
    payDay: faker.pickone([null, faker.date({year: 2017})])
  }
})

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