import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledCardFooter = styled.div`
    color: ${props => props.theme.colors.grey};
`

const StyledCardAuthor = styled.p`
    font-size: 1.3rem;
`

const StyledCardRef = styled.p`
    text-transform: uppercase;
    font-size: 0.9rem;
`

export class CardFooter extends PureComponent {
    static propTypes = {
        author: PropTypes.string,
        id: PropTypes.string.isRequired,
    }

    render() {
        const { author, id } = this.props

        return (
            <StyledCardFooter className="flex justify-content-between align-items-center flex-wrap">
                <StyledCardAuthor>{author}</StyledCardAuthor>
                <StyledCardRef>Id: {id}</StyledCardRef>
            </StyledCardFooter>
        )
    }
}

// const StyledCardSubTitle = styled.p`
//     color: ${props => props.theme.colors.grey};
//     font-size: 1.2rem;
//     padding-left: 1rem;
// `
// {subtitle && <StyledCardSubTitle>Author: {subtitle}</StyledCardSubTitle>}
