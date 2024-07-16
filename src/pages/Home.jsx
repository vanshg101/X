import React from "react";
import AddPost from "../components/AddPost";
// import Post from "../components/Post";

function Home() {
  return (
    <div className="flex justify-center">
      <div className="absolute left-1/4 right-1/3 bg-black block justify-center">
        <div className="flex w-full ">
          <button className="px-32 border-b-2 border-gray-800 py-4 hover:bg-zinc-900 text-white ">
            For you
          </button>
          <button className="px-32 border-b-2 border-gray-800 py-4 hover:bg-zinc-900 text-white ">
            Following
          </button>
        </div>
        <AddPost/>
        {/* <Post/> */}
      </div>
    </div>
  );
}

export default Home;
