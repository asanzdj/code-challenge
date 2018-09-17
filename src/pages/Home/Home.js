import React, { PureComponent } from 'react'
import { string, shape, func, arrayOf } from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import { Card, IconButton } from 'components'
import ArticleActions from 'store/redux/articles'

const StyledHomeWrapper = styled.div`
    ${props => props.theme.mixins.flexCenter};
`

const StyledHomeTitle = styled.h1`
    color: ${props => props.theme.primaryDark};
    font-size: 2.4rem;
    font-weight: 500;
    letter-spacing: 0.2rem;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
`

const StyledFloatedButton = styled.div`
    bottom: 2rem;
    position: fixed;
    right: 1rem;
`

const StyledArticlesWrapper = styled.div`
    ${props => props.theme.mixins.flexCenter};
`

const mapDispatchToProps = dispatch => ({
    getArticles: () => dispatch(ArticleActions.getArticles()),
    navigate: path => dispatch(push(path)),
})

const mapStateToProps = state => ({
    articles: state.articles.articles,
})

class Home extends PureComponent {
    static propTypes = {
        articles: arrayOf(
            shape({
                author: string,
                excerpt: string,
                id: string,
                title: string,
            }),
        ),
        navigate: func,
    }

    componentWillMount() {
        this.props.getArticles()
    }

    render() {
        const { articles, navigate } = this.props

        return (
            <StyledHomeWrapper>
                <StyledHomeTitle>Consult our articles</StyledHomeTitle>
                <StyledArticlesWrapper>
                    {articles.map(article => (
                        <Card item={article} key={article.id} onCardDetail={() => navigate(`/articles/view/${article.id}`)} />
                    ))}
                </StyledArticlesWrapper>
                <StyledFloatedButton>
                    <IconButton onClick={() => navigate('/articles/add')}>add</IconButton>
                </StyledFloatedButton>
            </StyledHomeWrapper>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home)
