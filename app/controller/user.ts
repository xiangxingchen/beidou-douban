import { Controller } from 'egg';

export default class RoutesController extends Controller {
  public async show() {
    console.log('------------------user---------------');
    await this.ctx.render('/index');
  }
  public async index() {
    console.log('------------------userlist---------------');
    this.ctx.body = [ '123', '456' ];
    this.ctx.status = 200;
  }
}
