'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class User extends Model {
  static boot() {
    super.boot()
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  tokens() {
    return this.hasMany('App/Models/Token')
  }

  employee() {
    return this.hasOne('App/Models/Employee')
  }

  teacher() {
    return this.hasOne('App/Models/Teacher')
  }

  student() {
    return this.hasOne('App/Models/Student')
  }

  static get hidden() {
    return ['password']
  }
}

module.exports = User
