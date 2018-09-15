import { createReducer, createActions } from 'reduxsauce'

export const initialState = {
    article: {},
    articles: [],
}

// Types and Action Creators
const { Types, Creators } = createActions(
    {
        clean: null,
        setArticles: ['articles'],
        setArticle: ['article'],
        //Async
        getArticles: null,
        getArticle: ['id'],
        deleteArticle: ['id'],
        createArticle: ['fields'],
    },
    {
        prefix: 'ARTICLES_',
    },
)
export const ArticleTypes = Types

// Reducers and Handlers
export const handlers = {
    [Types.CLEAN]: () => ({ ...initialState }),
    [Types.SET_ARTICLES]: (state = initialState, { articles }) => ({ ...state, articles }),
    [Types.SET_ARTICLE]: (state = initialState, { article }) => ({ ...state, article }),
}

export const reducer = createReducer(initialState, handlers)

export default Creators
