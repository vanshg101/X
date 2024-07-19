// import React, { useState, useEffect } from 'react';
// import PostCard from './Postcard';
// import appwriteService from '../apppwrite/config';


// function AllPosts() {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         // Define an async function inside useEffect to fetch posts
//         const fetchPosts = async () => {
//             try {
//                 const response = await appwriteService.getPosts();
//                 if (response && response.documents) {
//                     setPosts(response.documents);
//                 }
//             } catch (error) {
//                 console.error('Error fetching posts:', error);
//                 // Handle error state or logging as needed
//             }
//         };

        
//         fetchPosts();
//     }, []); // Empty dependency array ensures this effect runs only once on component mount

//     return (
//         <div className="w-full ">
//             <div className="block  bg-black">
//                 {posts.map((post) => (
//                     <div key={post.$id} className="  border-b-2  border-gray-800 pl-8">
//                         <PostCard {...post} />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default AllPosts;




import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostCard from './PostCard';
import appwriteService from '../apppwrite/config';
import { setPosts } from '../store/postSlice'; // Assuming you have a setPosts action to initialize posts

function AllPosts() {
    const posts = useSelector((state) => state.post.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await appwriteService.getPosts();
                if (response && response.documents) {
                    dispatch(setPosts(response.documents));
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, [dispatch]);

    return (
        <div className="w-full">
            <div className="block bg-black">
                {posts.map((post) => (
                    <div key={post.$id} className="border-b-2 border-gray-800 pl-8">
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllPosts;
