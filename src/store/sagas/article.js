import { put, call } from 'redux-saga/effects'

export function* getArticles(api) {
    console.log('Entro')
    console.log(api)
    const articles = yield call(api.getArticles)

    console.log(articles)
}

export function* getArticle(api, { id }) {
    yield call()
}
