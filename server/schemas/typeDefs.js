const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]                       //An array of the book type?
    }

    type Book {
        bookId: ID!                              //Is this right?
        authors: [String]
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
    me: User                                        // IS this it???
  }

  
type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth 
    saveBook (newBook: InputBook!): User
    removeBook(bookId: ID!): User                                                             
} 
`;

module.exports = typeDefs;

















