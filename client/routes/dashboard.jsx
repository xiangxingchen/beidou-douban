import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, Card } from 'antd';
import Page from '../components/page/index';

import actions from '../actions';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(actions.dashboard.fetch());
  }

  render() {
    return (
      <div >
        <h2>dashboard</h2>
      </div>
    );
  }
}

Dashboard.propTypes = {
  dashboard: PropTypes.object,
};

export default connect(state => state.dashboard)(Dashboard);
