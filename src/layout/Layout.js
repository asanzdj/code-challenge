import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Router from 'routes'
import ModalActions from 'store/redux/modal'
import { Footer, Navbar, Spinner, Modal, ModalBody, ModalFooter, Button } from 'components'
import './Layout.css'

const StyledLayout = styled.div`
    height: 100vh;
`
const StyledContentWrapper = styled.div`
    min-height: 90vh;
    padding: 1rem 1rem;
    width: 100%;
    overflow: ${props => (props.loading ? 'hidden' : 'auto')};
`

const mapStateToProps = state => ({
    error: state.global.error,
    isModalOpen: state.modal.isOpen,
    loading: state.global.loading,
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(ModalActions.hideModal()),
})

export class Layout extends PureComponent {
    render() {
        const { loading, isModalOpen, closeModal, error } = this.props

        return (
            <StyledLayout className="flex flex-wrap">
                <Spinner active={loading} />
                {error && (
                    <Modal isOpen={isModalOpen} onClose={closeModal} title={error.title}>
                        <ModalBody>
                            <p>{error.text}</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={closeModal}>Accept</Button>
                        </ModalFooter>
                    </Modal>
                )}
                <Modal isOpen={isModalOpen} onClose={closeModal} />
                <Navbar />
                <StyledContentWrapper className="ContentWrapper">
                    <Router />
                </StyledContentWrapper>
                <Footer />
            </StyledLayout>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Layout)
