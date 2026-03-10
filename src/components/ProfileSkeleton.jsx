function ProfileSkeleton() {
  return (
    <div className='bg-white shadow rounded-xl p-6 flex gap-6 animate-pulse'>
      <div className='w-28 h-28 bg-gray-300 rounded-full'></div>

      <div className='flex-1'>
        <div className='h-5 bg-gray-300 rounded w-1/3 mb-3'></div>

        <div className='h-3 bg-gray-200 rounded w-2/3 mb-2'></div>
        <div className='h-3 bg-gray-200 rounded w-1/2'></div>
      </div>
    </div>
  );
}

export default ProfileSkeleton;
