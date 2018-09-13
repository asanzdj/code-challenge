import { combineReducers } from 'redux'

import { reducer as articlesReducer } from './articles'

export default combineReducers({ articles: articlesReducer })
