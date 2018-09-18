export const DELETE_ARTICLE_MUTATION = `
    mutation($id: String!) {
        deleteArticle(id: $id) {
            id
        }
    }
`

export const CREATE_ARTICLE_MUTATION = `
    mutation(
        $title: String!
        $author: String!
        $content: String!
        $published: Boolean!
        $tags: [String]
        $excerpt: String!
    ) {
        createArticle(
            title: $title
            author: $author
            content: $content
            published: $published
            tags: $tags
            excerpt: $excerpt
        ) {
            id
        }
    }
`

export const UPDATE_ARTICLE_MUTATION = ({ title, author, content, published, tags, excerpt, id }) => `
    mutation {
        updateArticle(
            title: "${title}", 
            author: "${author}", 
            content: "${content}",
            published: ${published},
            tags: "${tags}",
            excerpt: "${excerpt}"
            id: "${id}"
        ) {
            id
        }
    }
`
