import { createReducer, createActions } from 'reduxsauce'

export const initialState = {
    loading: false,
}

// Types and Action Creators
const { Types, Creators } = createActions(
    {
        clean: null,
        showLoading: null,
        hideLoading: null,
    },
    {
        prefix: 'GLOBAL_',
    },
)
export const GlobalTypes = Types

// Reducers and Handlers
export const handlers = {
    [Types.CLEAN]: () => ({ ...initialState }),
    [Types.SHOW_LOADING]: (state = initialState) => ({ ...state, loading: true }),
    [Types.HIDE_LOADING]: (state = initialState) => ({ ...state, loading: false }),
}

export const reducer = createReducer(initialState, handlers)

export default Creators
