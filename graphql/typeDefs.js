
const typeDefs = `
  type User {
    id: Int!
    name: String!
    email: String!
    posts: [Post!]
  }

  type Post {
    id: Int!
    title: String!
    user: User!
  }

  type Query {
    users: [User!]
    posts: [Post!]
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
    createPost(title: String!, userId: Int!): Post!

    
    deleteUser(id: Int!): Boolean!
    deletePost(id: Int!): Boolean!
  }
`;

export default typeDefs;
