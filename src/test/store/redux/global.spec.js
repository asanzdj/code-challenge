import GlobalActions, { GlobalTypes, reducer as GlobalReducer } from 'store/redux/global'
import configureStore from 'redux-mock-store'

const middlewares = []
const mockStore = configureStore(middlewares)

describe('globalActionsCreators', () => {
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

describe('globalReducers', () => {
    it('should clean store to initial state when clean action is dispatched', () => {
        const initialState = {
            error: null,
            loading: false,
        }
        const reducer = GlobalReducer(initialState, { type: GlobalTypes.CLEAN })

        expect(reducer).toEqual(initialState)
    })
    it('should set true in loading when show loading action is dispatched', () => {
        const initialState = {
            error: null,
            loading: false,
        }

        const reducer = GlobalReducer(initialState, { type: GlobalTypes.SHOW_LOADING })
        const expectedState = {
            error: null,
            loading: true,
        }

        expect(reducer).toEqual(expectedState)
    })
    it('should set false in loading when hide loading action is dispatched', () => {
        const initialState = {
            error: null,
            loading: true,
        }

        const reducer = GlobalReducer(initialState, { type: GlobalTypes.HIDE_LOADING })
        const expectedState = {
            error: null,
            loading: false,
        }

        expect(reducer).toEqual(expectedState)
    })
    it('should set error message when set error action is dispatched', () => {
        const initialState = {
            error: null,
            loading: false,
        }
        const error = 'error'
        const reducer = GlobalReducer(initialState, { type: GlobalTypes.SET_ERROR, error })
        const expectedState = {
            error,
            loading: false,
        }

        expect(reducer).toEqual(expectedState)
    })
    it('should set null when clean error action is dispatched', () => {
        const initialState = {
            error: 'error',
            loading: false,
        }
        const reducer = GlobalReducer(initialState, { type: GlobalTypes.CLEAN_ERROR })
        const expectedState = {
            error: null,
            loading: false,
        }

        expect(reducer).toEqual(expectedState)
    })
})
