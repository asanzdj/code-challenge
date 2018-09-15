import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import { Home, ArticleDetail, ArticleCreation } from 'pages'
import { history } from 'store'

export default () => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/articles/add" component={ArticleCreation} />
            <Route exact path="/articles/view/:id" component={ArticleDetail} />
        </Switch>
    </ConnectedRouter>
)
