export const DELETE_ARTICLE_MUTATION = id => `
    mutation {
        deleteArticle(id: "${id}") {
            id
        }
    }`
