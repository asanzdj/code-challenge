import React, { PureComponent } from 'react'
import { bool, func, string } from 'prop-types'
import styled from 'styled-components'

import { Label } from './Label'

const StyledInput = styled.input`
    &:focus {
        outline-offset: -2px;
        outline: ${props => props.theme.primary} auto 0.5rem;
    }
`

export class CheckboxField extends PureComponent {
    static propTypes = {
        id: string.isRequired,
        name: string.isRequired,
        onChange: func.isRequired,
        value: bool.isRequired,
    }

    static defaultProps = {
        type: 'text',
    }

    render() {
        const { label, value, ...otherProps } = this.props

        return (
            <div className="flex align-items-center">
                <StyledInput {...otherProps} type="checkbox" checked={value} />
                {label && <Label>{label}</Label>}
            </div>
        )
    }
}
