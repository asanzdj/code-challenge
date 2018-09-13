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
        editable: PropTypes.bool,
        onRemove: PropTypes.func,
        marginRight: PropTypes.string,
    }

    render() {
        const { text, editable, onRemove, theme } = this.props

        return (
            <StyledTag>
                <span>{text}</span>
                {editable && <Icon color={theme.colors.white} onClick={onRemove} />}
            </StyledTag>
        )
    }
}

export default withTheme(Tag)
