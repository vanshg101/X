import React from 'react';
import appwriteService from '../apppwrite/config';
import { Link } from 'react-router-dom';

function PostCard({ $id, content, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full  py-4 flex flex-col bg-black'>
       
        <h2 className='text-xl p-2 mb-2 text-white'>{content}</h2>
        <div className=' w-full '>
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={content}
            className='rounded-xl w-96 h-96  object-cover'
          />
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
