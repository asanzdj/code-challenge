import { createReducer, createActions } from 'reduxsauce'

export const initialState = {
    loading: false,
    error: null,
}

// Types and Action Creators
const { Types, Creators } = createActions(
    {
        clean: null,
        // Loading
        showLoading: null,
        hideLoading: null,
        // Errors
        setError: ['error'],
        cleanError: null,
        showError: ['key'],
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
    [Types.SET_ERROR]: (state = initialState, { error }) => ({ ...state, error }),
    [Types.CLEAN_ERROR]: (state = initialState) => ({ ...state, error: null }),
}

export const reducer = createReducer(initialState, handlers)

export default Creators
