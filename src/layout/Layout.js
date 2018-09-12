import React, { PureComponent } from 'react'

import { Footer } from 'components'
import { Home } from 'pages'
import './Layout.css'

export class Layout extends PureComponent {
    render() {
        return (
            <div className="Layout">
                <div className="ContentWrapper">
                    <Home />
                </div>
                <Footer />
            </div>
        )
    }
}
