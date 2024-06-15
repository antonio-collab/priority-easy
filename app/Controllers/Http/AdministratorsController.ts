import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Administrator from 'App/Models/Administrator'

export default class AdministratorController {

  public async index({ response }: HttpContextContract) {
    const administrators = await Administrator.all()
    return response.ok(administrators)
  }


  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['name', 'email', 'password'])
    const administrator = await Administrator.create(data)
    return response.created(administrator)
  }


  public async show({ params, response }: HttpContextContract) {
    const administrator = await Administrator.findOrFail(params.id)
    return response.ok(administrator)
  }

  public async update({ params, request, response }: HttpContextContract) {
    const administrator = await Administrator.findOrFail(params.id)
    const data = request.only(['name', 'email', 'password'])
    administrator.merge(data)
    await administrator.save()
    return response.ok(administrator)
  }


  public async destroy({ params, response }: HttpContextContract) {
    const administrator = await Administrator.findOrFail(params.id)
    await administrator.delete()
    return response.noContent()
  }
}
