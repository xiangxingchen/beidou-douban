import { USER_VIEW_INIT } from './constants';
import { UserState } from './interface';

const initState: UserState = {
  name: 'chenxaing',
};

export default function user(state = initState, action) {
  switch (action.type) {
    case USER_VIEW_INIT:
      console.log('init-------------');
      const name: number = 123;
      return {
        ...state,
        name,
      };
    default:
      return state;
  }
}
