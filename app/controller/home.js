module.exports = (app) => {
  class HomeController extends app.Controller {
    async index() {
      // render view template in `app/views`
      await this.ctx.render('home');
    }

    async about() {
      // call service
      const contacts = await this.service.contact.list();
      // render view template in `client/`
      await this.ctx.render('about', { contacts });
    }
    async user() {
      await this.ctx.render('user', { contacts: ['tom', 'alan'] });
    }
  }

  return HomeController;
};
