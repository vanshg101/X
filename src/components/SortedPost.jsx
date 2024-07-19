import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';
import appwriteService from '../appwrite/config';

const SortedPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const sortedPosts = await appwriteService.fetchAndSortPosts();
            setPosts(sortedPosts);
        };

        getPosts();
    }, []);

    return (
        <div>
            <h2>Sorted Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.$id}>
                       <PostCard {...post} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SortedPosts;
