import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import sagas from 'store/sagas'
import reducers from 'store/redux'

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

const store = createStore(connectRouter(history)(reducers), composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware(history))))

sagaMiddleware.run(sagas)

export default store
