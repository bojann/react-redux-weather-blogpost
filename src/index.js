import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { hashHistory, Router, Route, Switch } from 'react-router-dom';
import history from "components/history";

import App from 'components/app';
import Blog from 'components/Blog';
import CreatePostForm from 'components/CreatePostForm';
import NavigationMenu from 'components/NavigationMenu';
import PostShow from 'components/PostShow';
import rootReducer from 'reducers/index';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Router history={history}>
      <React.Fragment>
        <NavigationMenu />
        <Switch>
          <Route exact path='/' component={App} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/post/new' component={CreatePostForm} />
          <Route path='/post/:id' component={PostShow} />
        </Switch>
      </React.Fragment>
    </Router>
  </Provider>
  , document.querySelector('.container'));
