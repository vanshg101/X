import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faEllipsisH } from "@fortawesome/free-solid-svg-icons";

function Extra() {
  return (
    <div className="absolute border-l-2 border-gray-800 top-0 right-0 h-full w-1/3 bg-black text-white flex flex-col items-center">
      <div className="w-2/3 relative h-full">
        <div className="bg-gray-800 rounded-3xl w-full h-10 mt-2 flex items-center  top-0 z-10">
          <FontAwesomeIcon icon={faSearch} className="text-white ml-4" />
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-800 ml-2 w-3/4 outline-none text-white"
          />
        </div>
        
        <div className="mt-6 h-[calc(100%-48px)] overflow-y-auto bg-black">
          <div className="border-2 border-gray-800 mt-5 rounded-xl w-full p-4">
            <h2 className="text-xl font-bold mb-4">What's happening</h2>
            
            <div className="mb-4">
              <div className="flex items-start mb-2">
                <img
                  src="https://pbs.twimg.com/semantic_core_img/1805971613285769217/oKtiLxq0?format=jpg&name=240x240"
                  alt="Esports World Cup 2024"
                  className="w-12 h-12 rounded-md"
                />
                <div className="ml-3">
                  <p className="text-sm text-gray-400">Esports · LIVE</p>
                  <p className="text-lg font-semibold">Esports World Cup 2024</p>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-400 text-sm">Trending in India</p>
                  <p className="font-semibold text-lg">Bengaluru</p>
                  <p className="text-gray-400 text-sm">34.6K posts</p>
                </div>
                <FontAwesomeIcon icon={faEllipsisH} className="text-gray-400" />
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-400 text-sm">Hardik Pandya · Trending</p>
                  <p className="font-semibold text-lg">Natasha</p>
                  <p className="text-gray-400 text-sm">
                    Trending with <span className="text-blue-500">#HardikPandya</span>
                  </p>
                </div>
                <FontAwesomeIcon icon={faEllipsisH} className="text-gray-400" />
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-400 text-sm">Trending in India</p>
                  <p className="font-semibold text-lg">#SaveAPFromTDP</p>
                  <p className="text-gray-400 text-sm">32.6K posts</p>
                </div>
                <FontAwesomeIcon icon={faEllipsisH} className="text-gray-400" />
              </div>
            </div>

            <p className="text-blue-500 cursor-pointer">Show more</p>
          </div>
          
          <div className="border-2 border-gray-800 mt-5 rounded-xl w-full p-4">
            <h2 className="text-xl font-bold mb-4">Who to follow</h2>

            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img
                  src="https://pbs.twimg.com/profile_images/1515139980334866433/uGJLTlzo_400x400.jpg"
                  alt="Nishant"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                  <p className="font-semibold">Nishant</p>
                  <p className="text-gray-400 text-sm">@nishant0511</p>
                </div>
              </div>
              <button className="bg-blue-500 text-white px-4 py-1 rounded-full">
                Follow
              </button>
            </div>

            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img
                  src="https://pbs.twimg.com/profile_images/1119147809293266944/8XxPH9P5_400x400.png"
                  alt="Ritesh Pandey"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                  <p className="font-semibold">Ritesh Pandey</p>
                  <p className="text-gray-400 text-sm">@_riteshpandey</p>
                </div>
              </div>
              <button className="bg-blue-500 text-white px-4 py-1 rounded-full">
                Follow
              </button>
            </div>

            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img
                  src="https://pbs.twimg.com/profile_images/1800257777190715392/VrE6v3Ji_400x400.jpg"
                  alt="Ubisoft"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                  <p className="font-semibold">Ubisoft</p>
                  <p className="text-gray-400 text-sm">@Ubisoft</p>
                </div>
              </div>
              <button className="bg-blue-500 text-white px-4 py-1 rounded-full">
                Follow
              </button>
            </div>

            <p className="text-blue-500 cursor-pointer">Show more</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Extra;
