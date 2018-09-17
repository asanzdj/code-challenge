import React, { PureComponent } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

const StyledIcon = styled.i`
    color: ${props => props.color};
    cursor: ${props => props.cursor};
    font-size: ${props => props.size} !important;
    margin-bottom: ${props => props.marginBottom};
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};
    margin-top: ${props => props.marginTop};
    margin: ${props => props.margin};
    text-align: ${props => props.align};
`

export class Icon extends PureComponent {
    static propTypes = {
        color: string,
        cursor: string,
        size: string,
        margin: string,
        marginTop: string,
        marginLeft: string,
        marginBottom: string,
        marginRight: string,
    }

    render() {
        const { className, ...otherProps } = this.props
        return (
            <StyledIcon className={`material-icons ${className}`} {...otherProps}>
                {this.props.children}
            </StyledIcon>
        )
    }
}
