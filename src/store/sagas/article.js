import ERRORS from 'utils/errors'
import { put, call } from 'redux-saga/effects'
import { history } from 'routes'

import ArticleActions from 'store/redux/articles'
import GlobalActions from 'store/redux/global'

import { delay } from 'utils/sagas'

export function* getArticles(api) {
    yield put(GlobalActions.showLoading())

    yield delay(500)
    const articles = yield call(api.getArticles)

    if (articles) {
        yield put(ArticleActions.setArticles(articles))
    } else {
        yield put(GlobalActions.setError(ERRORS.GET_ARTICLES))
    }

    yield put(GlobalActions.hideLoading())
}

export function* getArticle(api, { id }) {
    yield put(GlobalActions.showLoading())

    yield delay(500)
    const article = yield call(api.getArticle, id)

    if (article) {
        yield put(ArticleActions.setArticle(article))
    } else {
        yield put(GlobalActions.setError(ERRORS.GET_ARTICLE))
        yield call(history.push, '/')
    }

    yield put(GlobalActions.hideLoading())
}

export function* deleteArticle(api, { id }) {
    yield put(GlobalActions.showLoading())

    yield delay(500)
    const article = yield call(api.deleteArticle, id)

    if (article) {
        yield call(history.push, '/')
    } else {
        yield put(GlobalActions.setError(ERRORS.DELETE_ARTICLE))
    }

    yield put(GlobalActions.hideLoading())
}
