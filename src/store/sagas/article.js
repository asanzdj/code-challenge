import { put, call } from 'redux-saga/effects'

import ArticleActions from 'store/redux/articles'
import GlobalActions from 'store/redux/global'
import { delay } from 'utils/sagas'

export function* getArticles(api) {
    yield put(GlobalActions.showLoading())

    yield delay(500)
    const articles = yield call(api.getArticles)
    yield put(ArticleActions.setArticles(articles))

    yield put(GlobalActions.hideLoading())
}

export function* getArticle(api, { id }) {
    yield put(GlobalActions.showLoading())

    yield delay(500)
    const article = yield call(api.getArticle, id)
    yield put(ArticleActions.setArticle(article))

    yield put(GlobalActions.hideLoading())
}
