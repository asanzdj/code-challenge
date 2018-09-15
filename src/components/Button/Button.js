import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
    background: ${props => props.theme.colors[props.color]};
    border-radius: 2px;
    border: none;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.225);
    color: ${props => props.theme.colors.white};
    cursor: pointer;
    font-size: 15px;
    height: 35px;
    letter-spacing: 0.8px;
    line-height: 35px;
    outline: none;
    padding: 0 1.5rem;
    text-align: center;
    text-transform: uppercase;
    vertical-align: middle;
`

export class Button extends PureComponent {
    static propTypes = {
        children: PropTypes.any.isRequired,
        color: PropTypes.oneOf(['primary', 'secondary', 'orange', 'teal300']),
        outline: PropTypes.bool,
    }

    static defaultProps = {
        color: 'primary',
    }

    render() {
        const { children, ...otherProps } = this.props

        return <StyledButton {...otherProps}>{children}</StyledButton>
    }
}
