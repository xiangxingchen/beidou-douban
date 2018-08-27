import React from 'react';
import { connect } from 'react-redux';
import { Icon, Button, Checkbox } from 'antd-mobile';
import _ from 'lodash';
import moment from 'moment';
import { userInit, onViewInit } from './redux/actions';
import { UserPropsType } from './redux/interface';
import './index.less';

interface State {
  modal: boolean;
}

class User extends React.Component<UserPropsType, State> {
  constructor(props: UserPropsType) {
    super(props);
    this.state = {
      modal: true,
    };
  }

  public componentDidMount() {
    this.props.onViewInit();
    console.log(this.props.user.name);
    const a: boolean = _.isArray('ddd');
    const b: string = moment(new Date()).format('YYYY-MM-DD');
    console.log('--------------componentDidMount----------------', a, b);
  }

  public render() {
    return (
      <div>
        <Button>这是一个button</Button>
        <div>user</div>
        <div>{this.state.modal}</div>
        <div className="title_a">user-a</div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
     user: state.user,
  };
}

const mapDispatchToProps = {
  onViewInit,
  userInit,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
