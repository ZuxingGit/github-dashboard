import { useState } from 'react';
import RepoItem from './RepoItem';

function RepoList({ repos }) {
  const [keyword, setKeyword] = useState('');

  const filteredRepos = repos
    .filter((repo) => repo.name.toLowerCase().includes(keyword.toLowerCase()))
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
      <h2 className='text-2xl font-semibold'>Repositories</h2>

      <input
        className='flex border-2 rounded-2xl border-blue-500 p-2 col-span-1 bg-gray-100'
        placeholder='Search repository by keyword...'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      {filteredRepos.map((repo) => (
        <RepoItem repo={repo} />
      ))}
    </div>
  );
}

export default RepoList;
