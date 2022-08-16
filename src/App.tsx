import { FC } from 'react';
import './App.css';
import AsaList from './components/AsaList';
import Navbar from './components/Navbar';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const App: FC = (): any => {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://analytics-api.herokuapp.com/analytics"
  });

  return (
    <ApolloProvider client={client}>
      <div className="App space-y-12 px-12 py-4">
        <Navbar />
        <p className='text-4xl mx-auto lg:w-[40vw] font-[500] text-center'>
          List of Algorand Standard Assets on ASAlytics
        </p>
        <AsaList />
      </div>
    </ApolloProvider>

  );
}

export default App;
