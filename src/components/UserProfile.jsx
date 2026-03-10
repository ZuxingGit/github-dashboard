import React from 'react';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';

const UserProfile = ({ user }) => {
  return (
    <div className='bg-white shadow rounded-xl p-6 mt-6 flex flex-col sm:flex-row gap-6 sm:items-start sm:justify-between md:grid-cols-8'>
      <div className='flex gap-4 md:col-span-5'>
        <img src={user.avatar_url} className='w-28 h-28 rounded-full' />

        <div>
          <h2 className='text-xl font-semibold'>{user.name}</h2>
          <h3 className='text-md text-gray-500 mb-2'>@{user.login}</h3>
          <p className='text-gray-600'>{user.bio}</p>

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 text-sm text-gray-700'>
            <div className='flex items-center gap-1'>
              <MdBusiness className='text-gray-500' size={18} />
              <span>{user.company ?? 'N/A'}</span>
            </div>
            <div className='flex items-center gap-1'>
              <MdLink className='text-gray-500' size={18} />
              {user.blog ? (
                <a
                  href={user.blog || '#'}
                  target='_blank'
                  rel='noreferrer'
                  className='text-blue-600 hover:underline'
                >
                  {user.blog}
                </a>
              ) : (
                <span>N/A</span>
              )}
            </div>
            <div className='flex items-center gap-1'>
              <MdLocationOn className='text-gray-500' size={18} />
              <span>{user.location || 'N/A'}</span>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap gap-6 items-center justify-start sm:justify-end text-lg sm:text-2xl font-semibold text-gray-800 md:col-span-3'>
        <div className='text-right'>
          <div className='text-2xl text-gray-500'>Repos</div>
          <div>{user.public_repos}</div>
        </div>
        <div className='text-right'>
          <div className='text-2xl text-gray-500'>Followers</div>
          <div>{user.followers}</div>
        </div>
        <div className='text-right'>
          <div className='text-2xl text-gray-500'>Following</div>
          <div>{user.following}</div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
