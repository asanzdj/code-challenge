import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { CardHeader } from './CardHeader'
import { CardFooter } from './CardFooter'
import { CardBody } from './CardBody'

const StyledCard = styled.div`
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    padding: 1rem;
    max-width: 28rem;
    margin: 1rem 2rem;
`

export class Card extends PureComponent {
    static propTypes = {
        item: PropTypes.shape({
            title: PropTypes.string.isRequired,
            author: PropTypes.string,
            id: PropTypes.string.isRequired,
        }),
    }

    render() {
        const { item } = this.props
        return (
            <StyledCard>
                <CardHeader title={item.title} />
                <CardBody description={item.excerpt} />
                <CardFooter author={item.author} id={item.id} />
            </StyledCard>
        )
    }
}
