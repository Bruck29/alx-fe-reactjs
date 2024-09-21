import React from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

function App() {
  const handleSearch = async (username) => {
    return await fetchUserData(username);
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />
    </div>
  );
}

export default App;
