import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Router from 'routes'
import ModalActions from 'store/redux/modal'
import { Footer, Navbar, Spinner, Modal } from 'components'
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
    loading: state.global.loading,
    isModalOpen: state.modal.isOpen,
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(ModalActions.hideModal()),
})

export class Layout extends PureComponent {
    render() {
        const { loading, isModalOpen, closeModal } = this.props

        return (
            <StyledLayout className="flex flex-wrap">
                <Spinner active={loading} />
                {/* {error && <Modal isOpen={isModalOpen} onClose={closeModal} />} */}
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
