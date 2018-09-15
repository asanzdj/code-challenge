import React, { PureComponent } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

const StyledLabel = styled.p`
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
`

export class Label extends PureComponent {
    static propTypes = {
        children: string.isRequired,
    }

    render() {
        const { children } = this.props

        return <StyledLabel>{children}</StyledLabel>
    }
}
