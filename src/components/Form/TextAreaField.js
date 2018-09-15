import React, { PureComponent } from 'react'
import { oneOfType, string, number, func } from 'prop-types'
import styled from 'styled-components'

import { Label } from './Label'
import { ErrorMessage } from './ErrorMessage'

const StyledInput = styled.textarea`
    resize: none;
    width: 100%;
    min-height: 10rem;

    &:focus {
        outline-offset: -2px;
        outline: ${props => props.theme.primary} auto 0.5rem;
    }
`

export class TextAreaField extends PureComponent {
    static propTypes = {
        id: string.isRequired,
        name: string.isRequired,
        type: string,
        onChange: func.isRequired,
        value: oneOfType([string, number]).isRequired,
        error: string,
    }

    static defaultProps = {
        type: 'text',
    }

    render() {
        const { label, error, ...otherProps } = this.props

        return (
            <div>
                {label && <Label>{label}</Label>}
                <StyledInput {...otherProps} />
                {error && <ErrorMessage text={error} />}
            </div>
        )
    }
}
