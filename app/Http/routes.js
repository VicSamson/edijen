'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.get('company/').render('company')

Route.get('history/').render('history')

Route.get('contact/').render('contact')

//   Route.get('about/:id', (request, response) => {
//     const id = request.param('id')
//     console.log(id)
//     response.send(`Profile for user with id ${id}`)
//   })
