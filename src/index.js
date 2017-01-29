import { h, render } from 'preact'
import { Provider } from 'preact-redux'
import { Router, Route } from 'pre-bp-router'
import syncHistoryWithStore from 'preact-router-redux/lib/sync'

import browserHistory from './lib/browserHistory'
import configureStore from './stores/configureStore'

import * as actions from './actions'
import libraries from './data/libraries'
import initialTracks from './data/initialTracks'
import App from './containers/App'
import MainPage from './containers/MainPage'
import BirdPage from './containers/BirdPage'
import LibrariesPage from './containers/LibrariesPage'
import PageOne from './containers/PageOne'
import PageTwo from './containers/PageTwo'
import PageThree from './containers/PageThree'

if (process.env.NODE_ENV !== 'production') {
  require('preact/devtools')
}

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

store.dispatch(actions.setLibraries(libraries))
store.dispatch(actions.setTracks(initialTracks))

render(
  <Provider store={store}>
    <App>
      <Router history={history}>
        <Route path="/" component={MainPage} default/>
        <Route path="/bird" component={BirdPage} />
        <Route path="/libraries" component={LibrariesPage}/>
        <Route path="/one" component={PageOne}/>
        <Route path="/two" component={PageTwo}/>
        <Route path="/three" component={PageThree}/>
      </Router>
    </App>
  </Provider>,
  document.getElementById('app')
)
