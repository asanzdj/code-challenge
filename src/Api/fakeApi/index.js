import { article, articles } from './mocks'

const getArticles = () => articles
const getArticle = id => article

const deleteArticle = id => article
const createArticle = fields => article
const updateArticle = fields => article

export default {
    getArticles,
    getArticle,
    deleteArticle,
    createArticle,
    updateArticle,
}
