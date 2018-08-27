import React from 'react';
import { Link } from 'react-router-dom';
interface ILayout {
  children: React.ReactNode;
}

class Layout extends React.Component<ILayout> {

  public render() {
    const { children } = this.props;

    return (
      <div >
       hahahhahah
        <div>
        <Link to="/da">da</Link>
        </div>
        <div>
        <Link to="/user">user</Link>
        </div>
        <div>{children}</div>
      </div>
    );
  }
}

export default Layout;
