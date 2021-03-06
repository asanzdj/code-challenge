export const ARTICLES_QUERY = `{
  articles {
    author
    excerpt
    id
    title
  }
}`

export const ARTICLE_QUERY = `
  query($id: String!) {
    article(id: $id) {
      author
      content
      published
      tags
      id
      title
    }
  }
`
