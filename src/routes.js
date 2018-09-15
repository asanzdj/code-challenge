import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { Home, ArticleDetail } from 'pages'

export const history = createBrowserHistory()

export default () => (
    <BrowserRouter history={history}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:id" component={ArticleDetail} />
        </Switch>
    </BrowserRouter>
)
