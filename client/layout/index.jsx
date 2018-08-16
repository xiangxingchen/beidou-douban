import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './index.module.less';

const cx = classNames.bind(style);

class Layout extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  constructor() {
    super();
    this.state = {
      siderFolded: false,
    };
  }

  handleFad = () => {
    this.setState({
      siderFolded: !this.state.siderFolded,
    });
  };

  render() {
    const { children } = this.props;
    const { siderFolded } = this.state;
    const { router } = this.context;
    const { location } = router.history;

    return (
      <div className={cx('layout', { fold: siderFolded })}>
       hahahhahah
        <div className={cx('content')}>{children}</div>
      </div>
    );
  }
}

export default Layout;
