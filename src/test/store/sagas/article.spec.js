import { put, call } from 'redux-saga/effects'
import { cloneableGenerator } from 'redux-saga/utils'

import { getArticle, getArticles, createArticle, updateArticle, deleteArticle } from 'store/sagas/article'
import ArticleActions from 'store/redux/articles'
import GlobalActions from 'store/redux/global'
import api from 'Api'
import { delay } from 'utils/sagas'

describe('articleSagas', () => {
    it('gets articles', () => {
        const articles = [{ id: '1', title: 'title' }]
        const generator = cloneableGenerator(getArticles)(ArticleActions.getArticles)

        expect(generator.next().value).toEqual(put(GlobalActions.showLoading()))
        // expect(generator.next().value).toEqual(new Promise())
        expect(generator.next().value).toEqual(call(api.getArticles, articles))

        const clone = generator.clone()
        expect(clone.next(true).value).toEqual(put(ArticleActions.setArticles(articles)))
        expect(clone.next().done).toEqual(true)

        test('error getting', () => {
            const clone = generator.clone()
            expect(clone.next(false).value).toEqual(put(ArticleActions.setError()))
            expect(clone.next().done).toEqual(true)
        })

        expect(generator.next().value).toEqual(put(GlobalActions.hideLoading()))
    })
})
