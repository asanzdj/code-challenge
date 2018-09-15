import { GraphQLBoolean, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema, GraphQLNonNull } from 'graphql';
import { Types } from 'mongoose';

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

const articleArgs = {
  author: {
    type: new GraphQLNonNull(GraphQLString),
  },
  content: {
    type: new GraphQLNonNull(GraphQLString),
  },
  excerpt: {
    type: new GraphQLNonNull(GraphQLString),
  },
  published: {
    type: new GraphQLNonNull(GraphQLBoolean),
  },
  tags: {
    type: new GraphQLList(GraphQLString),
  },
  title: {
    type: new GraphQLNonNull(GraphQLString),
  },
};

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
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'The root mutation',
  fields: () => ({
    deleteArticle: {
      type: articleType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(root, { id }) {
        // Returns the article deleted is it's found
        // It is needed to check is id exists
        return Types.ObjectId.isValid(id) ? db.Article.findByIdAndRemove(id) : null;
      },
    },
    createArticle: {
      type: articleType,
      args: articleArgs,
      resolve(root, args) {
        return db.Article.create({ ...args });
      },
    },
  }),
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

export default Schema;
