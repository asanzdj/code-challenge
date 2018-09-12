import React from 'react'
import { ThemeProvider } from 'styled-components'
// import request from './request'
// import { ARTICLES_QUERY } from './queries'
import { Layout } from './layout'
import { theme } from 'theme/theme'

export default () => (
    <ThemeProvider theme={theme}>
        <Layout />
    </ThemeProvider>
)
