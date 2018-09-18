import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import ArticleActions from 'store/redux/articles'
import { ArticleForm } from '../Forms'

const mapDispatchToProps = dispatch => ({
    updateArticle: fields => dispatch(ArticleActions.updateArticle(fields)),
    getArticle: id => dispatch(ArticleActions.getArticle(id)),
})

const mapStateToProps = state => ({
    article: state.articles.article,
})

class ArticleEdition extends PureComponent {
    componentWillMount() {
        const { match, getArticle } = this.props

        this.articleId = match.params.id

        getArticle(this.articleId)
    }

    handleSubmitForm = fields => {
        const excerpt = fields.content.substring(0, 300)
        this.props.updateArticle({ ...fields, excerpt })
    }

    render() {
        const { article } = this.props

        return <ArticleForm formTitle="Edit an article" onSubmit={this.handleSubmitForm} article={article} />
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ArticleEdition)
