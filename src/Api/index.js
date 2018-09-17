import request from './request'
import { ARTICLES_QUERY, ARTICLE_QUERY } from './queries'
import { DELETE_ARTICLE_MUTATION, CREATE_ARTICLE_MUTATION, UPDATE_ARTICLE_MUTATION } from './mutations'

const getArticles = () => request(ARTICLES_QUERY).then(response => response.data.articles, error => error)
const getArticle = id => request(ARTICLE_QUERY(id)).then(response => response.data.article, error => error)

const deleteArticle = id => request(DELETE_ARTICLE_MUTATION(id)).then(response => response.data.deleteArticle, error => error)
const createArticle = fields => {
    return request(CREATE_ARTICLE_MUTATION(fields)).then(response => response.data.createArticle, error => error)
}
const updateArticle = fields => {
    return request(UPDATE_ARTICLE_MUTATION(fields)).then(response => response.data.updateArticle, error => error)
}

export default {
    getArticles,
    getArticle,
    deleteArticle,
    createArticle,
    updateArticle,
}
