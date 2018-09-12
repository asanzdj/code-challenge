import React, { PureComponent } from 'react'
import styled from 'styled-components'

import request from 'request'
import { ARTICLES_QUERY } from 'queries'
import { Card } from '../../components/Card'

const StyledHomeTitle = styled.h1`
    font-size: 2.4rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    color: ${props => props.theme.primaryDark};
`
const StyledArticles = styled.div``

export class Home extends PureComponent {
    state = {
        articles: [],
    }

    componentWillMount() {
        request(ARTICLES_QUERY).then(response => {
            this.setState({ articles: response.data.articles })
        })
    }

    render() {
        const { history } = this.props
        const { articles } = this.state

        return (
            <div className="flex justify-content-center flex-wrap">
                <StyledHomeTitle>Consult our articles</StyledHomeTitle>
                <StyledArticles className="flex justify-content-center flex-wrap">
                    {articles.map(article => (
                        <Card item={article} key={article.id} onCardDetail={() => history.push(`/${article.id}`)} />
                    ))}
                </StyledArticles>
            </div>
        )
    }
}
