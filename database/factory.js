'use strict'

const Factory = use('Factory')

Factory.blueprint('App/Models/User', async (faker, i, data) => {
  return {
    username: data.username || faker.name(),
    email: data.email || faker.email(),
    password: data.password || faker.string()
  }
})

Factory.blueprint('App/Models/Branch', async (faker, i, data) => {
  return {
    title: data.title || faker.company(),
    cep: data.cep || faker.zip(),
    district: data.district || faker.province(),
    city: data.city || faker.city(),
    state: data.state || faker.state(),
    address: data.address || faker.address(),
    phone: data.phone || faker.phone({ formatted: false, country: 'br' }),
  }
})

Factory.blueprint('App/Models/Resource', async (faker, i, data) => {
  return {
    title: data.title || faker.sentence({ words: 2 })
  }
})

Factory.blueprint('App/Models/Class', async (faker, i, data) => {
  return {
    title: data.title || faker.animal(),
    // is_revoked: data.is_revoked || faker.pickone([true, false])
  }
})

Factory.blueprint('App/Models/Teacher', async (faker, i, data) => {
  return {
    name: data.name || faker.name(),
    cpf: data.cpf || faker.cpf().replace(/\D/g, ''),
    phone: data.phone || faker.phone({ formatted: false, country: 'br' }),
    cep: data.cep || faker.zip(),
    district: data.district || faker.province(),
    city: data.city || faker.city(),
    state: data.state || faker.state(),
    address: data.address || faker.address(),
    gender: data.gender || faker.character({ pool: 'fm' })
  }
})

Factory.blueprint('App/Models/Event', async (faker, i, data) => {
  return {
    title: data.title || faker.sentence({ words: 5 }),
    start: data.start || faker.date({ year: 2017 }),
    end: data.end || faker.date({ year: 2017 }),
  }
})

Factory.blueprint('App/Models/Plan', async (faker, i, data) => {
  return {
    title: data.title || faker.animal(),
    value: data.value || faker.d100(),
    duration: data.duration || faker.d120(),
    is_revoked: data.is_revoked || faker.pickone([true, false])
  }
})

Factory.blueprint('App/Models/Student', async (faker, i, data) => {
  return {
    photo_url: data.photo_url || faker.url({ extensions: ['jpg', 'png'] }),
    name: data.name || faker.name(),
    cpf: data.cpf || faker.cpf().replace(/\D/g, ''),
    phone: data.phone || faker.phone({ formatted: false, country: 'br' }),
    email: data.email || faker.email(),
    cep: data.cep || faker.zip(),
    district: data.district || faker.province(),
    city: data.city || faker.city(),
    state: data.state || faker.state(),
    address: data.address || faker.address(),
    gender: data.gender || faker.character({ pool: 'fm' }),
    birth_date: data.birth_date || faker.date({ year: 2017 })
  }
})

Factory.blueprint('App/Models/Account', async (faker, i, data) => {
  return {
    title: data.title || faker.animal()
  }
})

Factory.blueprint('App/Models/Lesson', async (faker, i, data) => {
  return {
    value: data.value || faker.d100(),
    lessonDay: data.lessonDay || faker.date({ year: 2017 }),
    duration: data.duration || faker.d120(),
    description: data.description || faker.sentence({ words: 5 }),
    competence: data.competence || faker.date({ string: true, american: false }).substring(3)
  }
})

Factory.blueprint('App/Models/Employee', async (faker, i, data) => {
  return {
    photo_url: data.photo_url || faker.url({ extensions: ['jpg', 'png'] }),
    name: data.name || faker.name(),
    cpf: data.cpf || faker.cpf().replace(/\D/g, ''),
    phone: data.phone || faker.phone({ formatted: false, country: 'br' }),
    email: data.email || faker.email(),
    cep: data.cep || faker.zip(),
    district: data.district || faker.province(),
    city: data.city || faker.city(),
    state: data.state || faker.state(),
    address: data.address || faker.address(),
    gender: data.gender || faker.character({ pool: 'fm' }),
    birth_date: data.birth_date || faker.date({ year: 2017 })
  }
})

Factory.blueprint('App/Models/Product', async (faker, i, data) => {
  return {
    name: data.name || faker.name(),
    value: data.value || faker.d100()
  }
})

Factory.blueprint('App/Models/Stock', async (faker, i, data) => {
  return {
    quantity: data.quantity || faker.d10()
  }
})

Factory.blueprint('App/Models/PreAdhesion', async (faker, i, data) => {
  return {
    name: data.name || faker.name(),
    phone: data.phone || faker.phone({ formatted: false, country: 'br' }),
    email: data.email || faker.email(),
    available: data.available || faker.sentence({ words: 5 }),
    age_range: data.age_range || faker.pickone(['Adulto', 'Criança', 'Adolescente']),
    note: data.note || faker.sentence({ words: 5 }),
    is_pending: data.is_pending || faker.pickone([true, false]),
    is_revoked: data.is_revoked || faker.pickone([true, false]),
    language: data.language || faker.pickone(['Language 1', 'Language 2', 'Language 3'])
  }
})

Factory.blueprint('App/Models/Matriculation', async (faker, i, data) => {
  return {
    number: data.number || faker.natural(),
    is_revoked: data.is_revoked || faker.pickone([true, false]),
    is_overdue: data.is_overdue || faker.pickone([true, false]),
    dueDay: data.dueDay || faker.pickone([null, faker.date({ year: 2017 })]),
    stage: data.stage || faker.pickone(['Stage 01', 'Conversation', 'Stage 2']),
    billing_cycle: data.billing_cycle || faker.pickone(['semanal', 'mensal', 'avulso'])
  }
})

Factory.blueprint('App/Models/Bill', async (faker, i, data) => {
  return {
    payment_method: data.payment_method || faker.pickone(['alpha', 'bravo', 'charlie']),
    is_canceled: data.is_canceled || faker.pickone([true, false]),
    paidValue: data.paidValue || faker.d100(),
    value: data.value || faker.d100(),
    discount: data.discount || 0,
    dueDay: data.dueDay || faker.pickone([null, faker.date({ year: 2017 })]),
    payDay: data.payDay || faker.pickone([null, faker.date({ year: 2017 })])
  }
})

Factory.blueprint('App/Models/Purchase', async (faker, i, data) => {
  return {
    installments: data.installments || faker.d5(),
    value: data.value || faker.d100(),
    discount: data.discount || 0,
    payDay: data.payDay || faker.pickone([null, faker.date({ year: 2017 })]),
  }
})

Factory.blueprint('App/Models/Category', async (faker, i, data) => {
  return {
    title: data.title || faker.word({ length: 10 }),
    is_expense: data.is_expense || faker.pickone([true, false])
  }
})

Factory.blueprint('App/Models/Expense', async (faker, i, data) => {
  return {
    value: data.value || faker.d100(),
    payment_method: data.payment_method || faker.pickone(['alpha', 'bravo', 'charlie']),
    dueDay: data.dueDay || faker.date({ year: 2017 }),
    payDay: data.payDay || faker.pickone([null, faker.date({ year: 2017 })]),
    name: data.name || faker.word({ length: 5 }),
    description: data.description || faker.sentence({ words: 5 })
  }
})

Factory.blueprint('App/Models/Revanue', async (faker, i, data) => {
  return {
    value: data.value || faker.d100(),
    payment_method: data.payment_method || faker.pickone(['alpha', 'bravo', 'charlie']),
    dueDay: data.dueDay || faker.date({ year: 2017 }),
    payDay: data.payDay || faker.pickone([null, faker.date({ year: 2017 })]),
    name: data.name || faker.word({ length: 5 }),
    description: data.description || faker.sentence({ words: 5 })
  }
})