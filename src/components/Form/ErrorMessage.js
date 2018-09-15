import React, { PureComponent } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

const StyledError = styled.p`
    color: ${props => props.theme.colors.red};
    font-size: 1rem;
`

export class ErrorMessage extends PureComponent {
    static propTypes = {
        text: string.isRequired,
    }

    render() {
        const { text } = this.props

        return <StyledError>{text}</StyledError>
    }
}
