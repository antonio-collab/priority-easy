import Route from '@ioc:Adonis/Core/Route'

Route.post('session', 'SessionsController.store')

Route.group(() => {
  Route.delete('session', 'SessionsController.destroy')
}).middleware('auth')

Route.post('admin/login', 'SessionsController.store')

Route.get('/users', 'UsersController.index')
Route.get('/users/:id', 'UsersController.show')
Route.post('/users', 'UsersController.store')
Route.put('/users/:id', 'UsersController.update')
Route.delete('/users/:id', 'UsersController.destroy')

Route.group(()=>{ 
  Route.get('admin', 'AdministratorController.index')
  Route.post('admin', 'AdministratorController.store')
  Route.get('admin/:id', 'AdministratorController.show')
  Route.put('admin/:id', 'AdministratorController.update')
  Route.delete('admin/:id', 'AdministratorController.destroy')
}).middleware('auth')