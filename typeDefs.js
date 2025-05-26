export const typeDefs = `#graphql
    type Author {
        id: ID!
        name: String!
        books: [Book]
     }
    type Book {
        id: String!
        title: String!
        publishedYear: Int
        author: Author
    }
    type Query{
        authors: [Author]
        books: [Book]
    }
    type Mutation {
        addABook(title:String!, publishedYead: Int, authorId:ID!): Book!
    }
`;
