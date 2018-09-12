import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Layout } from './layout'
import { theme } from 'theme/theme'

export default () => (
    <ThemeProvider theme={theme}>
        <Layout />
    </ThemeProvider>
)
