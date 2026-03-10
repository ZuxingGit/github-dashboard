import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) return;
    onSearch(username);
  };

  return (
    <form onSubmit={handleSubmit} className='flex gap-2'>
      <input
        className='flex border rounded-lg p-2'
        placeholder='Enter GitHub username...'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button className='bg-blue-500 text-white px-4 py-2 rounded-lg'>
        Search
      </button>
    </form>
  );
}

export default SearchBar;
