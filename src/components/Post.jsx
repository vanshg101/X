import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import appwriteService from '../apppwrite/config'; 

export default function Post() {
    const [post, setPost] = useState(null);
    const { postId } = useParams(); 
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    // const isAuthor = post && userData ? post.userId === userData.$id : false; 

    useEffect(() => {
        if (postId) {
            console.log("Fetching post with postId:", postId);
            appwriteService.getPost(postId)
                .then((post) => {
                    if (post) {
                        console.log("Post fetched:", post);
                        setPost(post);
                    } else {
                        console.log("Post not found, navigating to home");
                        navigate("/");
                    }
                })
                .catch((error) => {
                    console.error("Error fetching post:", error);
                    navigate("/");
                });
        } else {
            console.log("postId not found, navigating to home");
            navigate("/");
        }
    }, [postId, navigate]);

    if (!post) {
        return <div className='text-white'>Loading...</div>;
    }

    // const isAuthor = post.userId === userData.$id;

    return (
        <div className="max-w-xl mx-auto bg-white border border-gray-300 rounded-xl shadow-sm p-4">
            {/* <div className="flex items-center">
                <img
                    src={post.userAvatar} // Assuming your post object has a userAvatar field
                    alt="Author Avatar"
                    className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                    <h2 className="text-lg font-bold">{post.userName}</h2>
                    <p className="text-gray-500">@{post.userHandle}</p>
                </div>
            </div> */}
            <div className="mt-4">
                {post.featuredImage && (
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt="Post Image"
                        className="rounded-xl mb-4"
                    />
                    
                )}
               
                <p className="text-gray-800">{post.content}</p>
            </div>
            <div className="mt-4 flex justify-between">
                <button className="text-blue-500 hover:underline">Like</button>
                <button className="text-blue-500 hover:underline">Comment</button>
                {/* {isAuthor && (
                    <button
                        onClick={() => navigate(`/edit-post/${post.$id}`)}
                        className="text-blue-500 hover:underline"
                    >
                        Edit
                    </button>
                )} */}
            </div>
        </div>
    );
}
