import React, { PureComponent } from 'react'
import { bool, func, string } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { push } from 'connected-react-router'

import Router from 'routes'
import ModalActions from 'store/redux/modal'
import GlobalActions from 'store/redux/global'
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
    cleanError: () => dispatch(GlobalActions.cleanError()),
    navigate: path => dispatch(push(path)),
})

export class Layout extends PureComponent {
    static propTypes = {
        navigate: func,
        cleanError: func,
        closeModal: func,
        error: string,
        isModalOpen: bool,
        loading: bool,
    }

    render() {
        const { loading, isModalOpen, closeModal, error, cleanError, navigate } = this.props

        return (
            <StyledLayout className="flex flex-wrap">
                <Spinner active={loading} />
                {error && (
                    <Modal isOpen={true} onClose={cleanError} title={error.title}>
                        <ModalBody>
                            <p>{error.text}</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={cleanError}>Accept</Button>
                        </ModalFooter>
                    </Modal>
                )}
                <Modal isOpen={isModalOpen} onClose={closeModal} />
                <Navbar navigate={navigate} />
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
