import React from "react";
import appwriteService from "../apppwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, content, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full  py-4 flex flex-col bg-black">
        <div className="block flex-col ">
          <div className="flex -ml-6">
            <img
              src={appwriteService.getFilePreview(featuredImage)} // Assuming your post object has a userAvatar field
              alt="Author Avatar"
              className="h-10 w-10 rounded-full mr-4"
            />
            <div>
              <h2 className="text-white">userName</h2>
              <p className="text-white">@userHandle</p>
            </div>
          </div>
          <h2 className="text-xl p-2 mb-2 ml-6 block text-white">{content}</h2>
        </div>

        <div className=" w-full ml-9">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={content}
            className="rounded-xl h-8/12 w-3/4  object-cover"
          />
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
