import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import store from 'store'
import { theme } from 'theme'
import { Layout } from './layout'

export default () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Layout />
        </ThemeProvider>
    </Provider>
)
