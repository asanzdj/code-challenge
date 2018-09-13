import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledCardBody = styled.h3`
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.6;
    padding: 2rem;
    text-align: justify;
`

export default class CardBody extends PureComponent {
    static propTypes = {
        description: PropTypes.string.isRequired,
    }

    render() {
        const { description } = this.props

        return <StyledCardBody>{description}</StyledCardBody>
    }
}
