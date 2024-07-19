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
            <div className="flex gap-1 -mt-1 ">
              <h2 className="text-white font-bold text-base">Vansh</h2>
              <img
                src="https://imgs.search.brave.com/d2isc2csx5mzfmhBrUdVuBByaX0XeQ_1mc7GNwTs1Yw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4z/LmVtb2ppLmdnL2Vt/b2ppcy8zMjc0LXZl/cmlmaWVkLnBuZw"
                alt="verified"
                className="h-5"
              />
              <p className="text-gray-500 text-sm">@VanshGularia</p>
            </div>
          </div>
          <h2 className="text-base -mt-6 mb-2 ml-8  block text-white">
            {content}
          </h2>
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
