import React, { Component } from 'react'
import styled, { withTheme } from 'styled-components'

const StyledFooter = styled.div`
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.primaryDark};
    padding: 1rem;
    bottom: 0;
    width: 100%;
`

class Footer extends Component {
    render() {
        return <StyledFooter className="flex justify-content-center align-items-center">Developed by Andrea Sanz</StyledFooter>
    }
}

export default withTheme(Footer)
