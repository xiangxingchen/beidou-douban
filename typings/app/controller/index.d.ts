// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import Home from '../../../app/controller/home';
import Routes from '../../../app/controller/routes';
import User from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    home: Home;
    routes: Routes;
    user: User;
  }
}
