import { useState } from 'react';

function RepoList({ repos }) {
  const [keyword, setKeyword] = useState('');

  const filteredRepos = repos
    .filter((repo) => repo.name.toLowerCase().includes(keyword.toLowerCase()))
    .sort((a, b) => b.stargazers_count - a.stargazers_count);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
      <h2>Repositories</h2>

      <input
        type='text'
        placeholder='Search repository...'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      {filteredRepos.map((repo) => (
        <div key={repo.id} className='bg-white shadow rounded-xl p-4'>
          <h3 className='font-semibold text-lg'>
            <a href={repo.html_url} target='_blank'>
              {repo.name}
            </a>
          </h3>

          <p className='text-gray-600 text-sm'>{repo.description}</p>

          <div className='flex justify-between mt-3 text-sm'>
            <span>⭐ {repo.stargazers_count}</span>
            <span>{repo.language}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RepoList;
