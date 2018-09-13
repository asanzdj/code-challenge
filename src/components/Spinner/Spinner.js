import React, { PureComponent } from 'react'
import { bool } from 'prop-types'
import styled from 'styled-components'

import './Spinner.css'

const SpinnerWrapper = styled.div`
    background: rgba(0, 0, 0, 0.9);
    bottom: 0;
    height: 100%;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 50;
};
`

export class Spinner extends PureComponent {
    static propTypes = {
        active: bool,
        expand: bool,
    }
    static defaultProps = {
        active: false,
        expand: true,
    }

    render() {
        const { active } = this.props

        if (!active) return null

        return (
            <SpinnerWrapper className="flex justify-content-center align-items-center">
                <div className="Spinner">
                    <div className="Bounce1" />
                    <div className="Bounce2" />
                    <div className="Bounce3" />
                </div>
            </SpinnerWrapper>
        )
    }
}
