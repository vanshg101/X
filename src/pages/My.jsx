import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostCard from '../components/PostCard';
import appwriteService from '../apppwrite/config';
import { setPosts } from '../store/postSlice'; // Assuming you have a setPosts action to initialize posts
import { useNavigate } from 'react-router-dom';

function AllPosts() {
    const navigate = useNavigate();
    const posts = useSelector((state) => state.post.posts);
    const userData = useSelector((state) => state.auth.userData);
    if(!userData?.email){
        navigate("/");
        return "nnnnn"
    }
    const dispatch = useDispatch();
    const email = userData.email
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                ; // Get the user's email from your user data
                const response = await appwriteService.getPostByEmail(email); // Assuming you create this function in your service
                if (response && response.documents) {
                    dispatch(setPosts(response.documents));
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
    
        fetchPosts();
    }, [dispatch, userData.email]);

    

    return (
        <div className="w-full">
            <div className="block absolute left-1/4 right-1/3 bg-black">
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
