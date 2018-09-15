import React, { PureComponent } from 'react'
import { oneOf, string, any, bool } from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
    background: ${props => props.theme.colors[props.color]};
    border-radius: 2px;
    border: none;
    border: none;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.225);
    color: ${props => props.theme.colors.white};
    cursor: pointer;
    font-size: 15px;
    height: ${props => props.height};
    letter-spacing: 0.8px;
    line-height: 35px;
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};
    margin: ${props => props.margin};
    outline: none;
    padding: 0 1.5rem;
    text-transform: uppercase;

    &:hover {
        box-shadow: 0 4px 10px 0px rgba(0, 0, 0, 0.225);
    }
`

export class Button extends PureComponent {
    static propTypes = {
        children: any.isRequired,
        color: oneOf(['primary', 'secondary', 'orange', 'teal300', 'greyDark']),
        height: string,
        margin: string,
        marginLeft: string,
        marginRight: string,
        outline: bool,
        width: string,
    }

    static defaultProps = {
        color: 'primary',
        height: '3.5rem',
    }

    render() {
        const { children, className, ...otherProps } = this.props

        return (
            <StyledButton {...otherProps} className={`flex justify-content-center align-items-center ${className}`}>
                {children}
            </StyledButton>
        )
    }
}
