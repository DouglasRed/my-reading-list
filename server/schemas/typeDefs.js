const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    bookId: String
    description: String
    authors: [String]
    title: String
    image: String
    link: String
  }
  input newBook {
    authors: [String]
    bookId: String
    description: String
    title: String
    image: String
    link: String
  }
`;

module.exports = typeDefs;
