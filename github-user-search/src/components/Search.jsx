import React, { useState } from 'react';
import { fetchAdvancedUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData(null);
    setCurrentPage(1); // Reset to page 1 on new search

    try {
      const data = await fetchAdvancedUserData(username, location, minRepos, 1);
      setUserData(data);
    } catch (err) {
      setError("Error occurred while fetching the user data.");
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    setLoading(true);

    try {
      const data = await fetchAdvancedUserData(username, location, minRepos, currentPage + 1);
      setUserData((prevData) => ({
        ...data,
        items: [...(prevData?.items || []), ...data.items],
      }));
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (err) {
      setError("Error occurred while loading more users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input fields for username, location, and minRepos */}
        <div>
          <label className="block text-gray-700">Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter GitHub username" className="input-field" />
        </div>
        <div>
          <label className="block text-gray-700">Location:</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter location" className="input-field" />
        </div>
        <div>
          <label className="block text-gray-700">Minimum Repositories:</label>
          <input type="number" value={minRepos} onChange={(e) => setMinRepos(e.target.value)} placeholder="Enter minimum repo count" className="input-field" />
        </div>
        <button type="submit" className="btn-primary">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {userData && userData.items && userData.items.length > 0 && (
        <div className="mt-4">
          {userData.items.map((user) => (
            <div key={user.id} className="user-card">
              <img src={user.avatar_url} alt={user.login} className="w-20 rounded-full" />
              <h3>{user.login}</h3>
              <p>Location: {user.location || 'N/A'}</p>
              <p>Public Repos: {user.public_repos}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                View Profile
              </a>
            </div>
          ))}
          <button onClick={handleLoadMore} className="btn-secondary">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
