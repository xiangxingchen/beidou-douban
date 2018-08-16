import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from 'react-router';
import { Row, Col, Button, Popconfirm } from 'antd';
import queryString from 'query-string';
import Page from 'client/components/page';


const obj2query = obj => queryString.stringify(obj);

const User = (a) => {
  return (
    <Page inner>
      <h1>user4444444444444</h1>
      <h1>{a.match.params.id}</h1>
      <a href="/user">链接</a>
    </Page>
  );
};

User.propTypes = {
  user: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
};

export default connect(({ user }) => ({ user }))(User);
