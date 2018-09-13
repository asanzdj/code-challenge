import { put, call } from 'redux-saga/effects'
import ArticleActions from 'store/redux/articles'

export function* getArticles(api) {
    const articles = yield call(api.getArticles)

    yield put(ArticleActions.setArticles(articles))
}

export function* getArticle(api, { id }) {
    const article = yield call(api.getArticle, id)

    yield put(ArticleActions.setArticle(article))
}
