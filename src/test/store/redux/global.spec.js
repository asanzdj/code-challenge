import GlobalActions, { GlobalTypes } from 'store/redux/global'
import configureStore from 'redux-mock-store'

const middlewares = []
const mockStore = configureStore(middlewares)

describe('actionsCreators', () => {
    it('should create a show loading action', () => {
        const store = mockStore({ loading: false })

        const expectedPayload = {
            type: GlobalTypes.SHOW_LOADING,
        }

        store.dispatch(GlobalActions.showLoading())

        expect(store.getActions()).toEqual([expectedPayload])
    })
    it('should create a hide loading action', () => {
        const store = mockStore({ loading: true })

        const expectedPayload = {
            type: GlobalTypes.HIDE_LOADING,
        }

        store.dispatch(GlobalActions.hideLoading())

        expect(store.getActions()).toEqual([expectedPayload])
    })
    it('should create a clean error action', () => {
        const store = mockStore({ error: null })

        const expectedPayload = {
            type: GlobalTypes.CLEAN_ERROR,
        }

        store.dispatch(GlobalActions.cleanError())

        expect(store.getActions()).toEqual([expectedPayload])
    })
    it('should create a set error action', () => {
        const store = mockStore({ error: null })
        const error = 'Error'

        const expectedPayload = {
            type: GlobalTypes.SET_ERROR,
            error,
        }

        store.dispatch(GlobalActions.setError(error))

        expect(store.getActions()).toEqual([expectedPayload])
    })
    it('should create a show error action', () => {
        const store = mockStore({ error: null })
        const key = 'KEY'

        const expectedPayload = {
            type: GlobalTypes.SHOW_ERROR,
            key,
        }

        store.dispatch(GlobalActions.showError(key))

        expect(store.getActions()).toEqual([expectedPayload])
    })
})
