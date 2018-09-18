import ArticleActions, { ArticleTypes } from 'store/redux/articles'
import configureStore from 'redux-mock-store'

const middlewares = []
const mockStore = configureStore(middlewares)

describe('actionsCreators', () => {
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
