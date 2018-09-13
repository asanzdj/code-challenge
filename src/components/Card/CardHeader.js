import React, { PureComponent } from 'react'
import { string, func } from 'prop-types'
import styled, { withTheme } from 'styled-components'

import { Icon } from 'components'

const StyledCardHeader = styled.div`
    border-bottom: 1px solid ${props => props.theme.colors.orange};
`

const StyledCardTitle = styled.h3`
    font-size: 1.6rem;
    font-weight: 400;
    padding: 1rem;
`

class CardHeader extends PureComponent {
    static propTypes = {
        title: string.isRequired,
        onCardDetail: func.isRequired,
    }

    render() {
        const { title, onCardDetail, theme } = this.props

        return (
            <StyledCardHeader className="flex justify-content-between">
                <StyledCardTitle>· {title} ·</StyledCardTitle>
                <Icon className="material-icons" onClick={onCardDetail} color={theme.colors.orange} cursor="pointer">
                    keyboard_arrow_right
                </Icon>
            </StyledCardHeader>
        )
    }
}

export default withTheme(CardHeader)
