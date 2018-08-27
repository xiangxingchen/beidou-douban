import { Controller } from 'egg';

export default class HomeController extends Controller {
    public async index() {
        // render view template in `app/views`
        await this.ctx.render('page', { from: 'server' });
    }

    public async about() {
        // call service
        const contacts = await this.service.contact.list();
        // render view template in `client/`
        await this.ctx.render('about', { contacts });
    }
}
