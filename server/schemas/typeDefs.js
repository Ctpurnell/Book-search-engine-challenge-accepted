const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: Book                       //An array of the book type?
    }

    type Book {
        bookId: String                         //Is this right?
        authors: [String!]
        description: String
        title: String
        image: String
        link: String
    }
    
    type Auth {
        token: ID!
        user: User
    }



type Query {
    users: [User]
    user(username: String!): User
    savedBooks(username: String): [Book]
    book(bookId: ID!): Book
    me: User
  }

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    // Question Here......................................................
} 
`
















