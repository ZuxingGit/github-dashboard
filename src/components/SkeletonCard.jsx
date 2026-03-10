function SkeletonCard() {
  return (
    <div className='bg-white shadow rounded-xl p-4 animate-pulse'>
      <div className='h-4 bg-gray-300 rounded w-3/4 mb-3'></div>

      <div className='h-3 bg-gray-200 rounded w-full mb-2'></div>
      <div className='h-3 bg-gray-200 rounded w-5/6 mb-3'></div>

      <div className='flex justify-between'>
        <div className='h-3 bg-gray-300 rounded w-10'></div>
        <div className='h-3 bg-gray-300 rounded w-16'></div>
      </div>
    </div>
  );
}

export default SkeletonCard;
