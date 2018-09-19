import configureStore from 'redux-mock-store'

import ModalActions, { ModalTypes, reducer as ModalReducer } from 'store/redux/modal'

const middlewares = []
const mockStore = configureStore(middlewares)

describe('actionsCreators', () => {
    it('should create a show modal action', () => {
        const store = mockStore({ isOpen: false })
        const expectedPayload = {
            type: ModalTypes.SHOW_MODAL,
        }

        store.dispatch(ModalActions.showModal())

        expect(store.getActions()).toEqual([expectedPayload])
    })
    it('should create a hide modal action', () => {
        const store = mockStore({ isOpen: true })

        const expectedPayload = {
            type: ModalTypes.HIDE_MODAL,
        }

        store.dispatch(ModalActions.hideModal())

        expect(store.getActions()).toEqual([expectedPayload])
    })
    it('should create a clean action', () => {
        const store = mockStore({})

        const expectedPayload = {
            type: ModalTypes.CLEAN,
        }

        store.dispatch(ModalActions.clean())

        expect(store.getActions()).toEqual([expectedPayload])
    })
})

describe('modalReducers', () => {
    it('should clean store to initial state when clean action is dispatched', () => {
        const initialState = {
            isOpen: false,
        }
        const reducer = ModalReducer(initialState, { type: ModalTypes.CLEAN })

        expect(reducer).toEqual(initialState)
    })
    it('should set true in is modal open when show modal action is dispatched', () => {
        const initialState = {
            isOpen: false,
        }

        const reducer = ModalReducer(initialState, { type: ModalTypes.SHOW_MODAL })
        const expectedState = {
            isOpen: true,
        }

        expect(reducer).toEqual(expectedState)
    })
    it('should set false in is modal open when hide modal action is dispatched', () => {
        const initialState = {
            isOpen: true,
        }

        const reducer = ModalReducer(initialState, { type: ModalTypes.HIDE_MODAL })
        const expectedState = {
            isOpen: false,
        }

        expect(reducer).toEqual(expectedState)
    })
})
