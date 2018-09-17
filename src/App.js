import React from 'react'
import { ThemeProvider, injectGlobal } from 'styled-components'
import { Provider } from 'react-redux'

import { globalStyles } from 'theme'
import store from 'store'
import { theme } from 'theme'
import { Layout } from './layout'

injectGlobal`${globalStyles}` // eslint-disable-line no-unused-expressions

export default () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Layout />
        </ThemeProvider>
    </Provider>
)
