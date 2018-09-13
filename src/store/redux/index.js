import { combineReducers } from 'redux'

import { reducer as articlesReducer } from './articles'
import { reducer as globalReducer } from './global'

export default combineReducers({ articles: articlesReducer, global: globalReducer })
