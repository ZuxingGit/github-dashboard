import { useState } from 'react';

function RepoList({ repos }) {
  const [keyword, setKeyword] = useState('');

  const filteredRepos = repos
    .filter((repo) => repo.name.toLowerCase().includes(keyword.toLowerCase()))
    .sort((a, b) => b.stargazers_count - a.stargazers_count);

  return (
    <div>
      <h2>Repositories</h2>

      <input
        type='text'
        placeholder='Search repository...'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      {filteredRepos.map((repo) => (
        <div
          key={repo.id}
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            margin: '10px 0',
          }}
        >
          <h3>
            <a href={repo.html_url} target='_blank'>
              {repo.name}
            </a>
          </h3>

          <p>{repo.description}</p>

          <p>
            ⭐ Stars: {repo.stargazers_count} | Language: {repo.language}
          </p>
        </div>
      ))}
    </div>
  );
}

export default RepoList;
