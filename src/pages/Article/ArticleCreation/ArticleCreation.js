import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import ArticleActions from 'store/redux/articles'
import { ArticleForm } from '../Forms'

const mapDispatchToProps = dispatch => ({
    createArticle: fields => dispatch(ArticleActions.createArticle(fields)),
})

class ArticleCreation extends PureComponent {
    handleSubmitForm = fields => {
        // if
        // console.log(fields)
        const excerpt = fields.content.substring(0, 300)
        this.props.createArticle({ ...fields, excerpt })
    }

    render() {
        return <ArticleForm formTitle="Create an article" onSubmit={this.handleSubmitForm} />
    }
}

export default connect(
    null,
    mapDispatchToProps,
)(ArticleCreation)
