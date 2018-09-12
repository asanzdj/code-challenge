import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledCardTitle = styled.h3`
    font-size: 1.6rem;
    font-weight: 400;
    border-bottom: 1px solid ${props => props.theme.colors.orange};
    padding: 0.9rem;
`

export class CardHeader extends PureComponent {
    static propTypes = {
        title: PropTypes.string.isRequired,
    }

    render() {
        const { title } = this.props
        return (
            <div className="flex justify-content-center">
                <StyledCardTitle>· {title} ·</StyledCardTitle>
            </div>
        )
    }
}
