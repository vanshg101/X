import React from "react";
import AddPost from "../components/AddPost";
// import Post from "../components/Post";
import AllPosts from "../components/AllPost";

function Home() {
  return (
    <div className="flex justify-center">
      <div className="absolute  left-1/4 right-1/3 bg-black block justify-center">
        <div className="flex w-full backdrop-blur-xl fixed  ">
          <button className="px-32 border-b-2 border-gray-800 py-4 hover:bg-zinc-900 text-white ">
            Foryou
          </button>
          <button className="px-32 border-b-2 border-gray-800 py-4 hover:bg-zinc-900 text-white ">
            Following
          </button>
        </div>
        <div className="mt-16">
         <AddPost/>
        </div>
        
        {/* <Post/> */}
        <AllPosts/>
      </div>
    </div>
  );
}

export default Home;