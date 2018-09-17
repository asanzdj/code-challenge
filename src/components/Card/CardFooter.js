import React, { PureComponent } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

const StyledCardFooter = styled.div`
    color: ${props => props.theme.colors.grey};
    ${props => props.theme.mixins.flexCenterBetween};
`

const StyledCardAuthor = styled.p`
    font-size: 1.3rem;
`

const StyledCardRef = styled.p`
    text-transform: uppercase;
    font-size: 0.9rem;
`

export default class CardFooter extends PureComponent {
    static propTypes = {
        author: string,
        id: string.isRequired,
    }

    render() {
        const { author, id } = this.props

        return (
            <StyledCardFooter>
                <StyledCardAuthor>{author}</StyledCardAuthor>
                <StyledCardRef>Id: {id}</StyledCardRef>
            </StyledCardFooter>
        )
    }
}
