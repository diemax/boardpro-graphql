import React from 'react';
import './App.css';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

function App() {
  const HELLO_QUERY = gql`
    {
      hello {
        hello
      }
    }
  `;
  return (
      <Query query={HELLO_QUERY}>
      {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
    
          console.log(data);
    
          return (
            <div>
              data
            </div>
          )
        }}
      </Query>
  );
}

export default App;
