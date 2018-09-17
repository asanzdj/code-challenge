import React, { PureComponent } from 'react'
import { any } from 'prop-types'
import styled from 'styled-components'

const StyledModalBody = styled.div`
    font-size: 1.2rem;
    margin-right: 1rem;
    margin-top: 1rem;
    ${props => props.theme.mixins.flexCenterEnd};
`

export class ModalFooter extends PureComponent {
    static propTypes = {
        children: any.isRequired,
    }

    render() {
        const { children } = this.props

        return <StyledModalBody>{children}</StyledModalBody>
    }
}
