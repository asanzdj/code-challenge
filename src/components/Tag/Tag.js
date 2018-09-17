import React, { PureComponent } from 'react'
import { string, func, bool } from 'prop-types'
import styled, { withTheme } from 'styled-components'

import { Icon } from 'components'

const StyledTag = styled.div`
    background: ${props => props.background || props.theme.colors.teal300};
    color: ${props => props.color || props.theme.colors.white};
    margin-right: ${props => props.marginRight || '2rem'};
    margin-top: ${props => props.marginRight || '0.5rem'};
    padding: 0.5rem 1rem;
    ${props => props.theme.mixins.flexCenterBetween};
`

class Tag extends PureComponent {
    static propTypes = {
        text: string.isRequired,
        background: string,
        color: string,
        removable: bool,
        onRemove: func,
        marginRight: string,
    }

    static defaultProps = {
        removable: false,
    }

    render() {
        const { text, removable, onRemove } = this.props

        return (
            <StyledTag>
                <span>{text}</span>
                {removable && (
                    <Icon size="1.3rem" cursor="pointer" onClick={() => onRemove(text)}>
                        close
                    </Icon>
                )}
            </StyledTag>
        )
    }
}

export default withTheme(Tag)
