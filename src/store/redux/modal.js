import { createReducer, createActions } from 'reduxsauce'

export const initialState = {
    isOpen: false,
}

const { Types, Creators } = createActions(
    {
        clean: null,
        showModal: null,
        hideModal: null,
    },
    {
        prefix: 'MODAL_',
    },
)
export const ModalTypes = Types

export const handlers = {
    [Types.CLEAN]: () => ({ ...initialState }),
    [Types.SHOW_MODAL]: (state = initialState) => ({ ...state, isOpen: true }),
    [Types.HIDE_MODAL]: (state = initialState) => ({ ...state, isOpen: false }),
}

export const reducer = createReducer(initialState, handlers)

export default Creators
