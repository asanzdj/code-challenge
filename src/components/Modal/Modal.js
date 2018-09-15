import React, { PureComponent } from 'react'
import { bool, string, func, any } from 'prop-types'
import styled, { withTheme } from 'styled-components'

import { ModalHeader } from './ModalHeader'
import { Icon } from 'components'

const StyledModalContainer = styled.div`
    background: ${props => props.theme.modalBackground};
    bottom: 0;
    height: 100%;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
`

const StyledModal = styled.div`
    background: ${props => props.theme.colors.white};
    border-radius: 0.1rem;
    min-height: 20rem;
    min-width: 70%;
    padding: 1rem;
`

class Modal extends PureComponent {
    static propTypes = {
        isOpen: bool.isRequired,
        title: string,
        onClose: func,
        children: any,
    }

    render() {
        const { title, theme, onClose, children, isOpen } = this.props

        return isOpen ? (
            <StyledModalContainer className="flex justify-content-center align-items-center">
                <StyledModal className="flex flex-column justify-content-between">
                    <div className="text-right">
                        <Icon color={theme.colors.greyDark} cursor="pointer" onClick={onClose}>
                            close
                        </Icon>
                    </div>
                    {title && <ModalHeader title={title} />}
                    {children}
                </StyledModal>
            </StyledModalContainer>
        ) : null
    }
}

export default withTheme(Modal)
