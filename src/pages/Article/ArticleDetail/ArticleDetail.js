import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled, { withTheme } from 'styled-components'
import { flow, isEmpty } from 'lodash'

import ArticleActions from 'store/redux/articles'
import { Icon, Paper, Tag } from 'components'
import './ArticleDetail.css'

const StyledPublication = styled.p`
    color: ${props => props.theme.colors.grey};
    text-transform: uppercase;
`

const StyledTitle = styled.h1`
    color: ${props => props.theme.colors.greyDark};
    margin-top: 2rem;
    text-transform: uppercase;
`
const StyledSubtitle = styled.h3`
    color: ${props => props.theme.colors.grey};
    font-size: 1.5rem;
    margin-top: 1rem;
`
const StyledContent = styled.p`
    color: ${props => props.theme.colors.greyDark};
    margin-top: 2rem;
    font-size: 1.4rem;
    line-height: 2.2rem;
`

const mapStateToProps = state => ({
    article: state.articles.article,
})

const mapDispatchToProps = dispatch => ({
    getArticle: id => dispatch(ArticleActions.getArticle(id)),
})

class ArticleDetail extends PureComponent {
    static propTypes = {
        article: PropTypes.shape({
            author: PropTypes.string,
            content: PropTypes.string,
            id: PropTypes.string,
            published: PropTypes.bool,
            tags: PropTypes.array,
            title: PropTypes.string,
        }),
    }

    componentWillMount() {
        const { match, getArticle } = this.props

        getArticle(match.params.id)
    }

    isPublished = () => this.props.article.published

    renderPublishedFlag = () => {
        const { theme } = this.props

        const color = this.isPublished() ? theme.colors.green : theme.colors.red
        const icon = this.isPublished() ? 'check' : 'close'
        const text = this.isPublished() ? 'Published' : 'Not published'

        return (
            <div className="text-right">
                <Icon color={color} marginRight="1rem" cursor="pointer" size="4.3rem">
                    {icon}
                </Icon>
                <StyledPublication>{text}</StyledPublication>
            </div>
        )
    }

    renderTags = () => {
        const { theme } = this.props

        return (
            <div className="flex justify-content-around flex-wrap">
                {this.props.article.tags.map((tag, index) => (
                    <Tag key={index} text={tag} background={theme.colors.teal300} color={theme.colors.white} marginRight="2rem" />
                ))}
            </div>
        )
    }

    render() {
        const { article } = this.props

        return !isEmpty(article) ? (
            <div className="flex justify-content-center">
                <Paper padding="1rem 2rem" margin="2rem 0" className="Article">
                    {this.renderPublishedFlag()}
                    <div>
                        <StyledTitle className="text-center">{article.title}</StyledTitle>
                        <StyledSubtitle className="text-right">{article.author}</StyledSubtitle>
                        <StyledContent className="text-justify">{article.content}</StyledContent>
                    </div>
                    {this.renderTags()}
                </Paper>
            </div>
        ) : null
    }
}

export default flow(
    withTheme,
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(ArticleDetail)

/* <div>
                            <Icon color={theme.colors.indigo} marginRight="1rem" cursor="pointer">
                                create
                            </Icon>
                            <Icon color={theme.colors.red} cursor="pointer">
                                delete_forever
                            </Icon>
                        </div> */
