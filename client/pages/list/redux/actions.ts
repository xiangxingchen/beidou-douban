import { createAction } from 'redux-actions';
import axios from 'axios';
import { USER_VIEW_INIT } from './constants';

export const userInit = createAction(USER_VIEW_INIT);

export function onViewInit() {
  return (dispatch) => {
    axios.get('/api/user')
      .then((res) => {
        console.log('--------------', res);
        dispatch(userInit());
      })
      .catch((err) => console.log('------------', err));
  };
}
