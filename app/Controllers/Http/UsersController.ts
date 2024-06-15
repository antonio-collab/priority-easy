import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {

    public async index({ response }: HttpContextContract) {
        try {
            const users = await User.all()
            response.status(200).json({
              message: 'Usuários listados com sucesso',
              data: users
            })
          } catch (error) {
            response.status(500).json({
              message: 'Erro ao listar usuários',
              error: error.message
            })
          }
      }
      public async show({ params, response }: HttpContextContract) {
        // Lógica para exibir um usuário específico
        const userId = params.id
        response.send(`Exibindo o usuário com ID: ${userId}`)
      }
      public async store({ request, response }: HttpContextContract) {
        // Lógica para criar um novo usuário
        const userData = request.only(['name', 'email', 'password'])
        // Salvar o usuário no banco de dados (implementação fictícia)
        // const user = await User.create(userData)
        response.send(`Criando um novo usuário com os dados: ${JSON.stringify(userData)}`)
      }
    
      public async update({ params, request, response }: HttpContextContract) {
        // Lógica para atualizar um usuário existente
        const userId = params.id
        const userData = request.only(['name', 'email', 'password'])
        // Atualizar o usuário no banco de dados (implementação fictícia)
        // const user = await User.findOrFail(userId)
        // user.merge(userData)
        // await user.save()
        response.send(`Atualizando o usuário com ID: ${userId} com os dados: ${JSON.stringify(userData)}`)
      }
    
      public async destroy({ params, response }: HttpContextContract) {
        // Lógica para deletar um usuário
        const userId = params.id
        // Deletar o usuário no banco de dados (implementação fictícia)
        // const user = await User.findOrFail(userId)
        // await user.delete()
        response.send(`Deletando o usuário com ID: ${userId}`)
      }
}
