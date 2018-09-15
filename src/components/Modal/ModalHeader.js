import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledModalHeader = styled.div`
    border-bottom: 0.2rem solid ${props => props.theme.colors.orange};
`
const StyledModalTitle = styled.h2`
    font-weight: 500;
`

export class ModalHeader extends PureComponent {
    static propTypes = {
        title: PropTypes.string.isRequired,
    }

    render() {
        const { title } = this.props
        return (
            <StyledModalHeader>
                <StyledModalTitle>{title}</StyledModalTitle>
            </StyledModalHeader>
        )
    }
}
