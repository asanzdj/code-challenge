import React, { PureComponent } from 'react'
import styled from 'styled-components'

const StyledNavbar = styled.div`
    background: ${props => props.theme.primary};
    color: ${props => props.theme.colors.white};
    height: 4vh;
    padding: 1rem;
    top: 0;
    width: 100%;
`

const Logo = styled.div`
    background: ${props => props.theme.colors.white};
    height: 36px;
    width: 36px;
    font-size: 1.6rem;
    cursor: pointer;
    color: ${props => props.theme.primary};
`

export class Navbar extends PureComponent {
    render() {
        return (
            <StyledNavbar className="flex justify-content-between align-items-center">
                <Logo className="flex justify-content-center align-items-center">
                    <h1>A</h1>
                </Logo>
            </StyledNavbar>
        )
    }
}
