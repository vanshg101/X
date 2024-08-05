import React, { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import appwriteService from '../apppwrite/config';


function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      
        const fetchPosts = async () => {
            try {
                const response = await appwriteService.getPosts();
                if (response && response.documents) {
                    setPosts(response.documents);
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
            
            }
        };
        fetchPosts();
    }, []); 

    return (
        <div className="w-full ">
            <div className="block absolute left-1/4 right-1/3 bg-black">
                {posts.map((post) => (
                    <div key={post.$id} className="  border-b-2  border-gray-800 pl-8">
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllPosts;