import { GraphQLBoolean, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema, GraphQLNonNull } from 'graphql';

import db from './db';

const articleType = new GraphQLObjectType({
  name: 'Article',
  description: 'This represents a Article',
  fields: () => ({
    author: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    excerpt: {
      type: GraphQLString,
    },
    id: {
      type: GraphQLString,
    },
    published: {
      type: GraphQLBoolean,
    },
    tags: {
      type: new GraphQLList(GraphQLString),
    },
    title: {
      type: GraphQLString,
    },
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => ({
    articles: {
      type: new GraphQLList(articleType),
      resolve() {
        const articles = db.Article.find();
        return articles || null;
      },
    },
    article: {
      type: articleType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(root, args) {
        const article = db.Article.findById(args.id);
        return article || null;
      },
    },
  }),
});

const Schema = new GraphQLSchema({
  query: Query,
});

export default Schema;
