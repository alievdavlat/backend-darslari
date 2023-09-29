import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import {  getAll, create, deleteOne, updateOne, getOne } from './utils/fs.js'


const typeDefs = `#graphql
 type Users {
    id: ID!
    name: String!
    books: [ Books ]
 
 }

 type Books {
  id: ID!
  title: String!
  author: String!
  users:[ Users ]
 }

 type Query {
  users: [Users]!
  user(id:ID!): Users
  books: [Books]
  book(id:ID!): Books
 }

 type Mutation {
  newUser(name: String!) : String

 }
`

const resolvers = {
  Query: {
    users: () => {
      return getAll('users.json')
    },
    user:(_ , {id}) => {      
      return getOne('users.json', id)
    },
    books: () => {
     return getAll('books.json')
    },
    book:(_, {id}) => {
      return  getOne('books.json', id)
    },
    
  },
  
  Mutation: {
    newUser: (_, args) => {
      const users = getAll('users.json')
      
      users.push({
        id:users?.at(-1)?.id + 1 || 1,
        name: args.name
      })

      create('users.json', users)
    },
  },
  Books : {
    id: global => global.id,
    title: global => global.title,
    author: global => global.author,
    users: global => getAll('users.json').filter(user => global.users.find(e => user.id == e))
  },

  Users : {
    id: global => global.id,
    name: global => global.name,
    books: global => getAll('books.json').filter(book => global.books.find(e => book.id == e))
  }
}


const server  = new ApolloServer({typeDefs, resolvers})


const { url } = await startStandaloneServer(server, {
  listen: { port:  4000  }
});


console.log(`🚀  Server ready at: ${url}`);

