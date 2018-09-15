import React, { PureComponent } from 'react'
import { oneOf, string, bool, any } from 'prop-types'
import styled from 'styled-components'

import { Icon } from 'components'
import { Button } from './Button'

const StyledButton = styled(Button)`
    border-radius: 50%;
    width: ${props => props.width};
    height: ${props => props.height};
`

export class IconButton extends PureComponent {
    static propTypes = {
        children: any.isRequired,
        color: oneOf(['primary', 'secondary', 'orange', 'teal300', 'greyDark']),
        height: string,
        margin: string,
        marginLeft: string,
        marginRight: string,
        outline: bool,
        width: string,
    }

    static defaultProps = {
        color: 'primary',
        width: '4rem',
        height: '4rem',
    }

    render() {
        const { children, ...otherProps } = this.props

        return (
            <StyledButton {...otherProps}>
                <Icon>{children}</Icon>
            </StyledButton>
        )
    }
}
