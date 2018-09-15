import request from './request'
import { ARTICLES_QUERY, ARTICLE_QUERY } from './queries'
import { DELETE_ARTICLE_MUTATION } from './mutations'

// Queries
const getArticles = () => request(ARTICLES_QUERY).then(response => response.data.articles, error => error)
const getArticle = id => request(ARTICLE_QUERY(id)).then(response => response.data.article, error => error)

// Mutations
const deleteArticle = id => request(DELETE_ARTICLE_MUTATION(id)).then(response => response.data.deleteArticle, error => error)

export default {
    getArticles,
    getArticle,
    deleteArticle,
}
