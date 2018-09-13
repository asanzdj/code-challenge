import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { Card } from 'components/Card'
import ArticleActions from 'store/redux/articles'

const StyledHomeTitle = styled.h1`
    font-size: 2.4rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    color: ${props => props.theme.primaryDark};
`

const mapDispatchToProps = dispatch => ({
    getArticles: () => dispatch(ArticleActions.getArticles()),
})

const mapStateToProps = state => ({
    articles: state.articles.articles,
})

class Home extends PureComponent {
    componentWillMount() {
        this.props.getArticles()
    }

    render() {
        const { history, articles } = this.props

        return (
            <div className="flex justify-content-center flex-wrap">
                <StyledHomeTitle>Consult our articles</StyledHomeTitle>
                <div className="flex justify-content-center flex-wrap">
                    {articles.map(article => (
                        <Card item={article} key={article.id} onCardDetail={() => history.push(`/${article.id}`)} />
                    ))}
                </div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home)
