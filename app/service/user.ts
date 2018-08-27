import { Service } from 'egg';

export default class UserService extends Service {
    public async findAll() {
        this.logger.info('Fetch data');
        return Promise.resolve([ 'Jim', 'Peng', 'Gray' ]);
    }
}
