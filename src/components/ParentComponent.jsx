// // ParentComponent.jsx
// import React, { useEffect, useState } from "react";
// import appwriteService from "../appwrite/config";
// import PostCard from "./PostCard";

// function ParentComponent({ postId, content, featuredImage, userId }) {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const fetchUser = async () => {
//             const userDetails = await appwriteService.getUser(userId);
//             setUser(userDetails);
//         };

//         fetchUser();
//     }, [userId]);

//     return (
//         user && (
//             <PostCard
//                 $id={postId}
//                 content={content}
//                 featuredImage={featuredImage}
//                 user={user}
//             />
//         )
//     );
// }

// export default ParentComponent;
