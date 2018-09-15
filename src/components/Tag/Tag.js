import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

import { Icon } from 'components'

const StyledTag = styled.div`
    background: ${props => props.background || props.theme.colors.teal300};
    color: ${props => props.color || props.theme.colors.white};
    margin-right: ${props => props.marginRight || '2rem'};
    margin-top: ${props => props.marginRight || '0.5rem'};
    padding: 0.5rem 1rem;
`

class Tag extends PureComponent {
    static propTypes = {
        text: PropTypes.string.isRequired,
        background: PropTypes.string,
        color: PropTypes.string,
        removable: PropTypes.bool,
        onRemove: PropTypes.func,
        marginRight: PropTypes.string,
    }

    static defaultProps = {
        removable: false,
    }

    render() {
        const { text, removable, onRemove, theme } = this.props

        return (
            <StyledTag className="flex justify-content-between align-items-center">
                <span>{text}</span>
                <Icon size="1.3rem" cursor="pointer">
                    close
                </Icon>
            </StyledTag>
        )
    }
}

export default withTheme(Tag)
