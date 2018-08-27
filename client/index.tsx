import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './configureStore';
import Layout from './layout/index';
import routes from './routes';
import './theme/index.less';

const Router = __CLIENT__ ? BrowserRouter : StaticRouter;

interface IViewProps {
  asset: (e?: string) => string;
}

interface InterfaceIC {
  helper: IViewProps;
  title: string;
  html: string;
  state: string;
  asset?: string;
}

export default class RouteView extends React.Component<InterfaceIC> {
  private static doctype = '<!DOCTYPE html>';
  private static defaultProps = {
    title: 'dashboard',
    asset: 'main',
  };

  private static async getStore({ ctx }) {
    const store = configureStore({});
    const users = await ctx.service.user.findAll();
    return store;
  }

  private static getPartial({ store, ctx }) {
    const props = {
      location: undefined,
      context: undefined,
    };
    if (ctx && ctx.url) {
      props.location = ctx.url;
      props.context = {
        location: {
          pathname: ctx.pathname,
        },
      };
    }
    const html = (
      <Provider store={store}>
        <Router {...props}>
          <Layout>{routes}</Layout>
        </Router>
      </Provider>
    );

    return { html };
  }

  public render() {
    const { title, html, state, helper } = this.props;
    return (
      <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="A admin dashboard application demo built upon Ant Design and Beidou"
        />
        <title>{title}</title>
        <script src="https://m.xyz.cn/xyz/dist/js/base/flexible.js" />
        <link rel="stylesheet" href={helper.asset('index.css')} />
      </head>
      <body>
      <div id="container" dangerouslySetInnerHTML={{ __html: html }} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__INITIAL_STATE__ = ${state}`,
        }}
      />
      <script src={helper.asset('manifest.js')} />
      <script src={helper.asset('index.js')} />
      </body>
      </html>
    );
  }
}

/**
 * client scope, wrapped in __CLIENT__ detect block
 * only run in client side
 */
if (__CLIENT__) {
  const store = configureStore(window.__INITIAL_STATE__);
  const app = (
    <Provider store={store}>
      <Router>
        <Layout>{routes}</Layout>
      </Router>
    </Provider>
  );
  ReactDOM.hydrate(app, document.getElementById('container'));
}
