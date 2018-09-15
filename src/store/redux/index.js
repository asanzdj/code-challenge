import { combineReducers } from 'redux'

import { reducer as articlesReducer } from './articles'
import { reducer as globalReducer } from './global'
import { reducer as modalReducer } from './modal'

export default combineReducers({ articles: articlesReducer, global: globalReducer, modal: modalReducer })
