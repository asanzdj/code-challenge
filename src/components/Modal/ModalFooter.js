import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledModalBody = styled.div`
    font-size: 1.2rem;
    margin-right: 1rem;
    margin-top: 1rem;
`

export class ModalFooter extends PureComponent {
    static propTypes = {
        children: PropTypes.any.isRequired,
    }

    render() {
        const { children } = this.props

        return <StyledModalBody className="flex justify-content-end">{children}</StyledModalBody>
    }
}
