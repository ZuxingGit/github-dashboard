import { useCallback, useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import RepoList from './components/RepoList';
import { fetchUser, fetchRepos } from './services/githubApi';
import LanguageChart from './components/LanguageChart';
import { getLanguageStats } from './utils/languageStats';
import SkeletonCard from './components/SkeletonCard';
import UserProfile from './components/UserProfile';

const DEFAULT_USERNAME = 'ZuxingGit';

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = useCallback(async (username) => {
    setLoading(true);
    setError(null);

    try {
      const userData = await fetchUser(username);
      const repoData = await fetchRepos(username);
      setUser(userData);
      setRepos(repoData);
    } catch (error) {
      setError(error.message);
      setUser(null);
      setRepos([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    handleSearch(DEFAULT_USERNAME);
  }, [handleSearch]);

  const languageData = getLanguageStats(repos);

  return (
    <div className='min-h-screen bg-sky-300'>
      <div className='max-w-6xl mx-auto p-6'>
        <h1 className='text-3xl font-bold mb-6'>GitHub Dashboard</h1>

        <SearchBar onSearch={handleSearch} initialUsername={DEFAULT_USERNAME} />

        {loading ? <SkeletonCard /> : user && <UserProfile user={user} />}

        {error && (
          <p className='bg-red-100 text-red-700 p-3 rounded mt-4'>{error}</p>
        )}

        {repos.length > 0 && (
          <>
            <h2 className='text-2xl font-semibold mt-4'>
              Programming Language Distribution
            </h2>
            <div className='grid md:grid-cols-5 gap-6 mt-4'>
              <div className='bg-white shadow rounded-xl p-4 col-span-2'>
                <LanguageChart data={languageData} type='pie' />
              </div>

              <div className='bg-white shadow rounded-xl py-4 col-span-3'>
                <LanguageChart data={languageData} type='bar' />
              </div>
            </div>

            {loading ? (
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
                {Array(6)
                  .fill(0)
                  .map((_, i) => (
                    <SkeletonCard key={i} />
                  ))}
              </div>
            ) : (
              <RepoList repos={repos} />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
