import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {ApolloClient , InMemoryCache , ApolloProvider} from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'


const token = JSON.parse(window.localStorage.getItem('access_token'))


const client  = new ApolloClient({
  uri:'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
  headers: {
    token: token ? token : ''
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ApolloProvider client={client}>

    <App />
    
    </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
