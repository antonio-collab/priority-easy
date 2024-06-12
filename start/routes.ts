import Route from '@ioc:Adonis/Core/Route'

Route.post('session', 'SessionsController.store')
Route.group(() => {
  Route.delete('session', 'SessionsController.destroy')
}).middleware('auth')
