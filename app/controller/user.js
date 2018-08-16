const Controller = require("egg").Controller;

module.exports = app => {
  class UserController extends Controller {
    async index() {
      const result = await this.service.dashboard.find();
      await this.ctx.render("home");
    }

    async create() {
      const { ctx } = this;
      const { userName, password } = ctx.request.body;
      const user = await this.service.user.create(userName, password);
      ctx.body = user;
      ctx.status = 201;
    }

    async logout() {
      const ctx = this.ctx;

      ctx.logout();
      ctx.redirect(ctx.get("referer") || "/");
    }
  }

  return UserController;
};
