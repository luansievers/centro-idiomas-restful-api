'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.group(() => {

  Route.resource('/branches', 'BranchController').apiOnly()
  Route.post('/logout', 'SessionController.logout')

}).prefix('api/v1').middleware(['auth'])

Route.group(() => {

  Route.post('/login', 'SessionController.login')

}).prefix('api/v1')