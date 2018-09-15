import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import { Home, ArticleDetail } from 'pages'
import { history } from 'store'

export default () => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:id" component={ArticleDetail} />
        </Switch>
    </ConnectedRouter>
)
