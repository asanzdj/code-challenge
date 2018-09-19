import configureStore from 'redux-mock-store'

import ArticleActions, { ArticleTypes, reducer as ArticleReducer } from 'store/redux/articles'
import { article as fakeArticle, articles as fakeArticles } from 'Api/fakeApi/mocks'
import fakeApi from 'Api/fakeApi'

const middlewares = []
const mockStore = configureStore(middlewares)

describe('articleActionsCreators', () => {
    it('should create a set article action', () => {
        const store = mockStore({ article: {} })
        const article = {
            id: '1',
            title: 'title',
        }
        const expectedPayload = {
            type: ArticleTypes.SET_ARTICLE,
            article: { ...article },
        }

        store.dispatch(ArticleActions.setArticle(article))

        expect(store.getActions()).toEqual([expectedPayload])
    })
    it('should create a set articles action', () => {
        const store = mockStore({ articles: [] })
        const articles = [
            {
                id: '1',
                title: 'title',
            },
            {
                id: '2',
                title: 'title',
            },
        ]
        const expectedPayload = {
            type: ArticleTypes.SET_ARTICLES,
            articles: articles,
        }

        store.dispatch(ArticleActions.setArticles(articles))

        expect(store.getActions()).toEqual([expectedPayload])
    })
    it('should create a clean store action', () => {
        const store = mockStore({ articles: [{ id: '1', title: 'title' }], article: {} })

        const expectedPayload = {
            type: ArticleTypes.CLEAN,
        }

        store.dispatch(ArticleActions.clean())

        expect(store.getActions()).toEqual([expectedPayload])
    })
    it('should create a get article action', () => {
        const store = mockStore({})
        const id = '1'

        const expectedPayload = {
            type: ArticleTypes.GET_ARTICLE,
            id,
        }

        store.dispatch(ArticleActions.getArticle(id))

        expect(store.getActions()).toEqual([expectedPayload])
    })
    it('should create a get articles action', () => {
        const store = mockStore({})

        const expectedPayload = {
            type: ArticleTypes.GET_ARTICLES,
        }

        store.dispatch(ArticleActions.getArticles())

        expect(store.getActions()).toEqual([expectedPayload])
    })
    it('should create a create article action', () => {
        const store = mockStore({})

        const expectedPayload = {
            type: ArticleTypes.CREATE_ARTICLE,
        }

        store.dispatch(ArticleActions.createArticle())

        expect(store.getActions()).toEqual([expectedPayload])
    })
    it('should create a delete article action', () => {
        const store = mockStore({})

        const expectedPayload = {
            type: ArticleTypes.DELETE_ARTICLE,
        }

        store.dispatch(ArticleActions.deleteArticle())

        expect(store.getActions()).toEqual([expectedPayload])
    })
    it('should create a update article action', () => {
        const store = mockStore({})

        const expectedPayload = {
            type: ArticleTypes.UPDATE_ARTICLE,
        }

        store.dispatch(ArticleActions.updateArticle())

        expect(store.getActions()).toEqual([expectedPayload])
    })
})

describe('articleReducers', () => {
    it('should clean store to initial state when clean action is dispatched', () => {
        const initialState = {
            articles: [],
            article: {},
        }
        const reducer = ArticleReducer(initialState, { type: ArticleTypes.CLEAN })

        expect(reducer).toEqual(initialState)
    })
    it('should set articles in state when set articles action is dispatched', () => {
        const initialState = {
            articles: [],
            article: {},
        }
        const articles = [
            {
                id: '1',
                title: 'title',
            },
            {
                id: '2',
                title: 'title',
            },
        ]
        const reducer = ArticleReducer(initialState, { type: ArticleTypes.SET_ARTICLES, articles })
        const expectedState = {
            article: {},
            articles,
        }

        expect(reducer).toEqual(expectedState)
    })
    it('should set article in state when set article action is dispatched', () => {
        const initialState = {
            articles: [],
            article: {},
        }
        const article = {
            id: '1',
            title: 'title',
        }
        const reducer = ArticleReducer(initialState, { type: ArticleTypes.SET_ARTICLE, article })
        const expectedState = {
            article,
            articles: [],
        }

        expect(reducer).toEqual(expectedState)
    })
})

describe('async actions', () => {
    it('calls get article api action and returns an article', () => {
        const article = fakeApi.getArticle(fakeArticle.id)

        expect(article).toEqual(fakeArticle)
    })
    it('calls get articles api action and returns an array of articles', () => {
        const articles = fakeApi.getArticles()

        expect(articles).toEqual(fakeArticles)
    })
    it('calls delete api action and returns deleted article', () => {
        const article = fakeApi.deleteArticle()

        expect(article).toEqual(fakeArticle)
    })
    it('calls update api action and returns updated article', () => {
        const article = fakeApi.updateArticle()

        expect(article).toEqual(fakeArticle)
    })
})
