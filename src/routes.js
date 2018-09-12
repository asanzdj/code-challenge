import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home, ArticleDetail } from 'pages'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:id" component={ArticleDetail} />
        </Switch>
    </BrowserRouter>
)
