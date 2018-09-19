import { put, call } from 'redux-saga/effects'
import { cloneableGenerator } from 'redux-saga/utils'
import { push } from 'connected-react-router'

import ArticleActions from 'store/redux/articles'
import GlobalActions from 'store/redux/global'
import { getArticles, getArticle, updateArticle, deleteArticle, createArticle } from 'store/sagas/article'
import { delay } from 'utils/sagas'
import fakeApi from 'Api/fakeApi'
import { article as fakeArticle } from 'Api/fakeApi/mocks'
import ERRORS from 'utils/errors'

describe('articleSagas', () => {
    it('executes properly get articles saga', () => {
        const generator = cloneableGenerator(getArticles)(fakeApi)

        expect(generator.next().value).toEqual(put(GlobalActions.showLoading()))
        expect(generator.next().value).toEqual(delay())
        expect(JSON.stringify(generator.next().value)).toEqual(JSON.stringify(call(getArticles)))

        const successClone = generator.clone()
        expect(successClone.next(true).value).toEqual(put(ArticleActions.setArticles(true)))
        expect(successClone.next().value).toEqual(put(GlobalActions.hideLoading()))
        expect(successClone.next().done).toEqual(true)

        const errorClone = generator.clone()
        expect(errorClone.next(false).value).toEqual(put(GlobalActions.setError(ERRORS.GET_ARTICLES)))
        expect(errorClone.next().value).toEqual(put(GlobalActions.hideLoading()))
        expect(errorClone.next().done).toEqual(true)
    })
    it('executes properly get an article saga', () => {
        const id = '1'
        const generator = cloneableGenerator(getArticle)(fakeApi, { id })

        expect(generator.next().value).toEqual(put(GlobalActions.showLoading()))
        expect(generator.next().value).toEqual(delay())
        expect(JSON.stringify(generator.next().value)).toEqual(JSON.stringify(call(getArticle, id)))

        const successClone = generator.clone()
        expect(successClone.next(true).value).toEqual(put(ArticleActions.setArticle(true)))
        expect(successClone.next().value).toEqual(put(GlobalActions.hideLoading()))
        expect(successClone.next().done).toEqual(true)

        const errorClone = generator.clone()
        expect(errorClone.next(false).value).toEqual(put(GlobalActions.setError(ERRORS.GET_ARTICLE)))
        expect(errorClone.next().value).toEqual(put(push('/')))
        expect(errorClone.next().value).toEqual(put(GlobalActions.hideLoading()))
        expect(errorClone.next().done).toEqual(true)
    })
    it('executes properly update an article saga', () => {
        const fields = fakeArticle
        const generator = cloneableGenerator(updateArticle)(fakeApi, { fields })

        expect(generator.next().value).toEqual(put(GlobalActions.showLoading()))
        expect(generator.next().value).toEqual(delay())
        expect(JSON.stringify(generator.next().value)).toEqual(JSON.stringify(call(updateArticle, fields)))

        const successClone = generator.clone()
        expect(successClone.next(true).value).toEqual(put(push(`/articles/view/undefined`)))
        expect(successClone.next().value).toEqual(put(GlobalActions.hideLoading()))
        expect(successClone.next().done).toEqual(true)

        const errorClone = generator.clone()
        expect(errorClone.next(false).value).toEqual(put(GlobalActions.setError(ERRORS.UPDATE_ARTICLE)))
        expect(errorClone.next().value).toEqual(put(GlobalActions.hideLoading()))
        expect(errorClone.next().done).toEqual(true)
    })
    it('executes properly delete an article saga', () => {
        const id = '1'
        const generator = cloneableGenerator(deleteArticle)(fakeApi, { id })

        expect(generator.next().value).toEqual(put(GlobalActions.showLoading()))
        expect(generator.next().value).toEqual(delay())
        expect(JSON.stringify(generator.next().value)).toEqual(JSON.stringify(call(deleteArticle, id)))

        const successClone = generator.clone()
        expect(successClone.next(true).value).toEqual(put(push(`/`)))
        expect(successClone.next().value).toEqual(put(GlobalActions.hideLoading()))
        expect(successClone.next().done).toEqual(true)

        const errorClone = generator.clone()
        expect(errorClone.next(false).value).toEqual(put(GlobalActions.setError(ERRORS.DELETE_ARTICLE)))
        expect(errorClone.next().value).toEqual(put(GlobalActions.hideLoading()))
        expect(errorClone.next().done).toEqual(true)
    })
    it('executes properly create an article saga', () => {
        const fields = fakeArticle
        const generator = cloneableGenerator(createArticle)(fakeApi, { fields })

        expect(generator.next().value).toEqual(put(GlobalActions.showLoading()))
        expect(generator.next().value).toEqual(delay())
        expect(JSON.stringify(generator.next().value)).toEqual(JSON.stringify(call(createArticle, fields)))

        const successClone = generator.clone()
        expect(successClone.next(true).value).toEqual(put(push(`/articles/view/undefined`)))
        expect(successClone.next().value).toEqual(put(GlobalActions.hideLoading()))
        expect(successClone.next().done).toEqual(true)

        const errorClone = generator.clone()
        expect(errorClone.next(false).value).toEqual(put(GlobalActions.setError(ERRORS.CREATE_ARTICLE)))
        expect(errorClone.next().value).toEqual(put(GlobalActions.hideLoading()))
        expect(errorClone.next().done).toEqual(true)
    })
})
