const Mock = require('mockjs');

module.exports = ({ Service }) => {
  class UserService extends Service {
    async create(userName, password) {
      const avatar = Mock.Random.image(
        '100x100',
        Mock.Random.color(),
        '#757575',
        'png',
        userName.substr(0, 1)
      );
      console.log(avatar);
      return await this.ctx.model.User.create({
        userName,
        password,
        avatar
      });
    }
    async findAll() {
      return await this.ctx.model.User.find();
    }
  }

  return UserService;
};
