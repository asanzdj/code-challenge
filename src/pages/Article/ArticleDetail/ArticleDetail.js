import React, { PureComponent } from 'react'
import { string, array, bool, shape } from 'prop-types'
import { connect } from 'react-redux'
import styled, { withTheme } from 'styled-components'
import { flow, isEmpty } from 'lodash'
import { push } from 'connected-react-router'

import ArticleActions from 'store/redux/articles'
import { Icon, Paper, Tag, Modal, ModalBody, ModalFooter, Button } from 'components'

const StyledPublication = styled.p`
    color: ${props => props.theme.colors.grey};
    text-transform: uppercase;
`

const StyledTitle = styled.h1`
    color: ${props => props.theme.colors.greyDark};
    margin-top: 2rem;
    text-transform: uppercase;
    text-align: center;
`
const StyledSubtitle = styled.h3`
    color: ${props => props.theme.colors.grey};
    font-size: 1.5rem;
    margin-top: 1rem;
    texta-lign: right;
`
const StyledContent = styled.p`
    color: ${props => props.theme.colors.greyDark};
    margin-top: 2rem;
    font-size: 1.4rem;
    line-height: 2.2rem;
    text-align: justify;
`

const StyledTagsWrapper = styled.div`
    ${props => props.theme.mixins.flexCenterAround};
`

const StyledArticleWrapper = styled.div`
    ${props => props.theme.mixins.flexCenterCenter};
    @media (max-width: 667px) {
        width: 90%;
    }
    @media (min-width: 668px) {
        width: 70%;
    }
    @media (min-width: 1500px) {
        width: 60%;
    }
`

const StyledArticleState = styled.div`
    text-align: right;
`

const mapStateToProps = state => ({
    article: state.articles.article,
})

const mapDispatchToProps = dispatch => ({
    getArticle: id => dispatch(ArticleActions.getArticle(id)),
    onDeleteArticle: id => dispatch(ArticleActions.deleteArticle(id)),
    navigate: path => dispatch(push(path)),
})

class ArticleDetail extends PureComponent {
    static propTypes = {
        article: shape({
            author: string,
            content: string,
            id: string,
            published: bool,
            tags: array,
            title: string,
        }),
    }

    state = {
        isDeleteModalOpen: false,
    }

    componentWillMount() {
        const { match, getArticle } = this.props

        this.articleId = match.params.id

        getArticle(this.articleId)
    }

    isPublished = () => this.props.article.published

    closeDeleteModal = () => {
        this.setState({ isDeleteModalOpen: false })
    }
    openDeleteModal = () => {
        this.setState({ isDeleteModalOpen: true })
    }

    renderPublishedFlag = () => {
        const { theme } = this.props

        const color = this.isPublished() ? theme.colors.green : theme.colors.red
        const icon = this.isPublished() ? 'check' : 'close'
        const text = this.isPublished() ? 'Published' : 'Not published'

        return (
            <StyledArticleState>
                <Icon color={color} marginRight="1rem" cursor="pointer" size="4.3rem">
                    {icon}
                </Icon>
                <StyledPublication>{text}</StyledPublication>
            </StyledArticleState>
        )
    }

    renderTags = () => {
        const { theme } = this.props

        return (
            <StyledTagsWrapper>
                {this.props.article.tags.map(
                    (tag, index) =>
                        tag && tag !== null && tag !== 'null' && tag !== 'undefined' ? (
                            <Tag key={index} text={tag} background={theme.colors.teal300} color={theme.colors.white} marginRight="2rem" />
                        ) : null,
                )}
            </StyledTagsWrapper>
        )
    }

    renderActionsHeader = () => {
        const { navigate, theme } = this.props

        return (
            <div>
                <Icon color={theme.colors.indigo} marginRight="1rem" cursor="pointer" onClick={() => navigate(`/articles/edit/${this.articleId}`)}>
                    create
                </Icon>
                <Icon color={theme.colors.red} cursor="pointer" onClick={this.openDeleteModal}>
                    delete_forever
                </Icon>
            </div>
        )
    }

    renderDeleteModal = () => {
        const { onDeleteArticle } = this.props
        const { isDeleteModalOpen } = this.state

        return (
            <Modal isOpen={isDeleteModalOpen} title="Are your sure you want to delele this article?" onClose={this.closeDeleteModal}>
                <ModalBody>
                    <p>This change is permanent and it can't be undone.</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="greyDark" marginRight="2rem" onClick={this.closeDeleteModal}>
                        No
                    </Button>
                    <Button
                        onClick={() => {
                            this.closeDeleteModal()
                            onDeleteArticle(this.articleId)
                        }}
                    >
                        Yes
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }

    render() {
        const { article } = this.props

        return !isEmpty(article) ? (
            <StyledArticleWrapper>
                {this.renderDeleteModal()}
                <Paper padding="1rem 2rem" margin="2rem 0">
                    {this.renderActionsHeader()}
                    {this.renderPublishedFlag()}
                    <div>
                        <StyledTitle>{article.title}</StyledTitle>
                        <StyledSubtitle>{article.author}</StyledSubtitle>
                        <StyledContent>{article.content}</StyledContent>
                    </div>
                    {this.renderTags()}
                </Paper>
            </StyledArticleWrapper>
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
