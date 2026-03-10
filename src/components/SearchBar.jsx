import { useState } from 'react';

function SearchBar({ onSearch, initialUsername = '' }) {
  const [username, setUsername] = useState(initialUsername);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = username.trim();
    if (!value) return;
    onSearch(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex gap-2'>
      <input
        className='flex border-2 rounded-2xl border-blue-500 p-2 bg-gray-100'
        placeholder='Enter GitHub username...'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button
        type='submit'
        className='bg-blue-600 text-white px-4 py-2 rounded-lg'
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
