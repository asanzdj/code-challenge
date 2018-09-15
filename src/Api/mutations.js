export const DELETE_ARTICLE_MUTATION = id => `
    mutation {
        deleteArticle(id: "${id}") {
            id
        }
    }
`

export const CREATE_ARTICLE_MUTATION = ({ title, author, content, published, tags, excerpt }) => `
    mutation {
        createArticle(
            title: "${title}", 
            author: "${author}", 
            content: "${content}",
            published: ${published},
            tags: "${tags}",
            excerpt: "${excerpt}"
        ) {
            id
        }
    }
`
