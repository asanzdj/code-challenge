import React, { PureComponent } from 'react'
import { oneOfType, string, number, func } from 'prop-types'
import styled from 'styled-components'

import { Label } from './Label'

const StyledInput = styled.input`
    &:focus {
        outline-offset: -2px;
        outline: ${props => props.theme.primary} auto 0.5rem;
    }
`

export class TextField extends PureComponent {
    static propTypes = {
        id: string.isRequired,
        name: string.isRequired,
        type: string,
        onChange: func.isRequired,
        value: oneOfType([string, number]).isRequired,
    }

    static defaultProps = {
        type: 'text',
    }

    render() {
        const { label, ...otherProps } = this.props

        return (
            <div>
                {label && <Label>{label}</Label>}
                <StyledInput {...otherProps} type="text" />
            </div>
        )
    }
}
