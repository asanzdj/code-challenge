import React, { PureComponent } from 'react'

import { Footer, Navbar } from 'components'
import { Home } from 'pages'
import './Layout.css'

export class Layout extends PureComponent {
    render() {
        return (
            <div className="Layout">
                <Navbar />
                <div className="ContentWrapper">
                    <Home />
                </div>
                <Footer />
            </div>
        )
    }
}
