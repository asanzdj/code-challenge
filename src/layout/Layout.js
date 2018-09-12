import React, { PureComponent } from 'react'

import { Footer, Navbar } from 'components'
import Router from 'routes'
import './Layout.css'

export class Layout extends PureComponent {
    render() {
        return (
            <div className="Layout">
                <Navbar />
                <div className="ContentWrapper">
                    <Router />
                </div>
                <Footer />
            </div>
        )
    }
}
