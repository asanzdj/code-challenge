import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledModalBody = styled.div`
    font-size: 1.2rem;
    margin: 2rem 1rem;
    text-align: center;
`

export class ModalBody extends PureComponent {
    static propTypes = {
        children: PropTypes.any.isRequired,
    }

    render() {
        const { children } = this.props

        return <StyledModalBody>{children}</StyledModalBody>
    }
}
