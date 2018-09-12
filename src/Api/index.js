import request from './request'
import { ARTICLES_QUERY } from './queries'

const getArticles = () => request(ARTICLES_QUERY).then(response => response.data.articles, error => error)
const getArticle = () => request(ARTICLES_QUERY).then(response => response.data.articles, error => error)
// const getArticle = id => request(ARTICLE_QUERY(id)).then(response => response.data.article, error => error)

export default {
    getArticles,
    getArticle,
}
