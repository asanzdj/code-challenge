import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { Footer, Navbar, Spinner } from 'components'
import Router from 'routes'
import './Layout.css'
import styled from 'styled-components'

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
})

export class Layout extends PureComponent {
    render() {
        const { loading } = this.props

        return (
            <StyledLayout className="flex flex-wrap">
                <Spinner active={loading} />
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
    null,
)(Layout)
