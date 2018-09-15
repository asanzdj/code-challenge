import React, { PureComponent } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

const StyledPaper = styled.div`
    background-color: ${props => props.theme.colors.white};
    border-radius: 4px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    padding: ${props => props.padding};
    min-width: ${props => props.minWidth};
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};
    margin-top: ${props => props.marginTop};
    margin: ${props => props.margin};
`

export class Paper extends PureComponent {
    static propTypes = {
        padding: string,
    }

    render() {
        return <StyledPaper {...this.props}>{this.props.children}</StyledPaper>
    }
}
