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
    <div className='min-h-screen bg-gray-100'>
      <div className='max-w-6xl mx-auto p-6'>
        <h1 className='text-3xl font-bold mb-6'>GitHub Dashboard</h1>

        <SearchBar onSearch={handleSearch} />

        {user && (
          <div className='bg-white shadow rounded-xl p-6 mt-6 flex gap-6'>
            <img src={user.avatar_url} className='w-28 h-28 rounded-full' />

            <div>
              <h2 className='text-xl font-semibold'>{user.name}</h2>
              <p className='text-gray-600'>{user.bio}</p>

              <div className='flex gap-6 mt-3 text-sm'>
                <span>Repos: {user.public_repos}</span>
                <span>Followers: {user.followers}</span>
                <span>Following: {user.following}</span>
              </div>
            </div>
          </div>
        )}

        {repos.length > 0 && (
          <>
            <div className='grid md:grid-cols-2 gap-6 mt-8'>
              <div className='bg-white shadow rounded-xl p-4'>
                <LanguageChart data={languageData} type='pie' />
              </div>

              <div className='bg-white shadow rounded-xl p-4'>
                <LanguageChart data={languageData} type='bar' />
              </div>
            </div>
            <RepoList repos={repos} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
