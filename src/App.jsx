import { useState } from 'react';
import SearchBar from './components/SearchBar';
import RepoList from './components/RepoList';
import { fetchUser, fetchRepos } from './services/githubApi';
import LanguageChart from './components/LanguageChart';
import { getLanguageStats } from './utils/languageStats';

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleSearch = async (username) => {
    const userData = await fetchUser(username);
    const repoData = await fetchRepos(username);

    setUser(userData);
    setRepos(repoData);
  };

  const languageData = getLanguageStats(repos);

  return (
    <div style={{ width: '900px', margin: 'auto' }}>
      <h1>GitHub Dashboard</h1>

      <SearchBar onSearch={handleSearch} />

      {user && (
        <div>
          <img src={user.avatar_url} width='120' />
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          <p>Repos: {user.public_repos}</p>
        </div>
      )}

      {repos.length > 0 && (
        <>
          <LanguageChart data={languageData} />
          <RepoList repos={repos} />
        </>
      )}
    </div>
  );
}

export default App;
