import React from 'react';
import { connect } from 'react-redux';
import './index.less';

class Css extends React.Component {

  public render() {
    return (
      <div>
        {/*<div id="one">*/}
          {/*<div className="loader">*/}
            {/*<div className="inner one" />*/}
            {/*<div className="inner two" />*/}
            {/*<div className="inner three" />*/}
          {/*</div>*/}
        {/*</div>*/}
        {/*<div id="two">*/}
          {/*<div className="loader">*/}
            {/*<span />*/}
            {/*<span />*/}
            {/*<span />*/}
            {/*<span />*/}
            {/*<span />*/}
            {/*<span />*/}
            {/*<span />*/}
            {/*<span />*/}
            {/*<span />*/}
            {/*<span />*/}
            {/*<span />*/}
            {/*<span />*/}
            {/*<span />*/}
            {/*<span />*/}
            {/*<span />*/}
          {/*</div>*/}
        {/*</div>*/}
        <div id="three">
          <div className="loader">
            <div className="circle" />
            {/*<div className="circle" />*/}
            {/*<div className="circle" />*/}
            {/*<div className="circle" />*/}
            {/*<div className="circle" />*/}
          </div>
        </div>
        <div id="four">
          <div className="helix">
            <div>
              <div />
            </div>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    );
  }
}

export default Css;
