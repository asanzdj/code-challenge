import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import { Card, IconButton } from 'components'
import ArticleActions from 'store/redux/articles'

const StyledHomeTitle = styled.h1`
    font-size: 2.4rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    color: ${props => props.theme.primaryDark};
`

const StyledFloatedButton = styled.div`
    bottom: 2rem;
    position: fixed;
    right: 1rem;
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
        articles: PropTypes.arrayOf(
            PropTypes.shape({
                author: PropTypes.string,
                excerpt: PropTypes.string,
                id: PropTypes.string,
                title: PropTypes.string,
            }),
        ),
        navigate: PropTypes.func,
    }

    componentWillMount() {
        this.props.getArticles()
    }

    render() {
        const { articles, navigate } = this.props

        return (
            <div className="flex justify-content-center flex-wrap">
                <StyledHomeTitle>Consult our articles</StyledHomeTitle>
                <div className="flex justify-content-center flex-wrap">
                    {articles.map(article => (
                        <Card item={article} key={article.id} onCardDetail={() => navigate(`/articles/view/${article.id}`)} />
                    ))}
                </div>
                <StyledFloatedButton>
                    <IconButton onClick={() => navigate('/articles/add')}>add</IconButton>
                </StyledFloatedButton>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home)
