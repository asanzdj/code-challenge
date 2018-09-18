import ModalActions, { ModalTypes } from 'store/redux/modal'
import configureStore from 'redux-mock-store'

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
