import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledIcon = styled.i`
    color: ${props => props.color};
    cursor: ${props => props.cursor};
    margin-bottom: ${props => props.marginBottom};
    font-size: ${props => props.size} !important;
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};
    margin-top: ${props => props.marginTop};
    margin: ${props => props.margin};
`

export class Icon extends PureComponent {
    static propTypes = {
        color: PropTypes.string,
        cursor: PropTypes.string,
        size: PropTypes.string,
        margin: PropTypes.string,
        marginTop: PropTypes.string,
        marginLeft: PropTypes.string,
        marginBottom: PropTypes.string,
        marginRight: PropTypes.string,
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
