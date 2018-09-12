import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import sagas from 'store/sagas'
import reducers from 'store/redux'

const sagaMiddleware = createSagaMiddleware()
const sagaWithDevTools = composeWithDevTools(applyMiddleware(sagaMiddleware))
const store = createStore(reducers, sagaWithDevTools)

sagaMiddleware.run(sagas)

export default store
