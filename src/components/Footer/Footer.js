import React, { Component } from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.primaryDark};
    padding: 1rem;
    bottom: 0;
    width: 100%;
    height: 2vh;
`

export class Footer extends Component {
    render() {
        return <StyledFooter className="flex justify-content-center align-items-center">Developed by Andrea Sanz</StyledFooter>
    }
}
