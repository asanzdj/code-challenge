import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled, { withTheme } from 'styled-components'
import { flow, isEmpty } from 'lodash'

import ArticleActions from 'store/redux/articles'
import { Icon, Paper, Tag, Modal, ModalBody, ModalFooter, Button } from 'components'
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
    onDeleteArticle: id => dispatch(ArticleActions.deleteArticle(id)),
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

    renderActionsHeader = () => (
        <div>
            <Icon color={this.props.theme.colors.red} cursor="pointer" onClick={this.openDeleteModal}>
                delete_forever
            </Icon>
        </div>
    )

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
            <div className="flex justify-content-center">
                {this.renderDeleteModal()}
                <Paper padding="1rem 2rem" margin="2rem 0" className="Article">
                    {this.renderActionsHeader()}
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
