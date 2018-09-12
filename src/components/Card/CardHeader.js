import React, { PureComponent } from 'react'
import { string, func } from 'prop-types'
import styled from 'styled-components'

const StyledCardHeader = styled.div`
    border-bottom: 1px solid ${props => props.theme.colors.orange};
`

const StyledCardIcon = styled.i`
    cursor: pointer;
    color: ${props => props.theme.colors.orange};
`

const StyledCardTitle = styled.h3`
    font-size: 1.6rem;
    font-weight: 400;
    padding: 1rem;
`

export class CardHeader extends PureComponent {
    static propTypes = {
        title: string.isRequired,
        onCardDetail: func.isRequired,
    }

    render() {
        const { title } = this.props
        return (
            <StyledCardHeader className="flex justify-content-between">
                <StyledCardTitle>· {title} ·</StyledCardTitle>
                <StyledCardIcon className="material-icons">keyboard_arrow_right</StyledCardIcon>
            </StyledCardHeader>
        )
    }
}
