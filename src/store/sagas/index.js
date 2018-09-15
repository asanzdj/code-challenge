import { takeLatest, all } from 'redux-saga/effects'

import api from 'Api'
import { getArticles, getArticle, deleteArticle, createArticle } from './article'
import { ArticleTypes } from 'store/redux/articles'

export default function* rootSaga() {
    yield all([
        yield takeLatest(ArticleTypes.GET_ARTICLES, getArticles, api),
        yield takeLatest(ArticleTypes.GET_ARTICLE, getArticle, api),
        yield takeLatest(ArticleTypes.DELETE_ARTICLE, deleteArticle, api),
        yield takeLatest(ArticleTypes.CREATE_ARTICLE, createArticle, api),
    ])
}
