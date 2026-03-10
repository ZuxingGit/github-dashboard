import React from 'react';

const RepoItem = ({ repo }) => {
  return (
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
  );
};

export default RepoItem;
