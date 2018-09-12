import React, { PureComponent } from 'react'

import { Home } from 'pages'
import './Layout.css'

export class Layout extends PureComponent {
    render() {
        return (
            <div className="Layout">
                <Home />
            </div>
        )
    }
}
