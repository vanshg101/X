import React from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import appwriteService from '../apppwrite/config'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
// import { ID } from "appwrite";

export default function AddPost({ post }) {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            content: post?.content || "",
            slug: post?.$id || "",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const submit = async (data) => {
        const file = await appwriteService.uploadFile(data.image[0]);

        if (file) {
            const fileId = file.$id;
            data.featuredImage = fileId;
            const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
               
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-col space-y-3">
            <div className="w-full mt-4 flex px-2 items-center">
                <img
                    src="https://pbs.twimg.com/profile_images/1508720448410099714/5ZFpx5vI_400x400.jpg"
                    alt="Logo"
                    className="h-12 px-2 rounded-full"
                />
                <Input
                    placeholder="What is Happening?!"
                    className="mb-0 text-xl bg-black text-gray-700 flex-grow"
                    {...register("content", { required: true })}
                />
            </div>
            <div className="flex items-center justify-between px-2 border-b-2 border-gray-700">
                <label className="mb-4 flex cursor-pointer">
                    <FontAwesomeIcon icon={faImage} size="1x" className="text-gray-500 px-2 hover:text-gray-700" />
                    <input
                        type="file"
                        className="hidden"
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        {...register("image", { required: !post })}
                    />
                </label>
                <button type="submit" className="py-2 px-5 rounded-3xl mb-2 text-white bg-blue-600">
                    {post ? "Update" : "Post"}
                </button>
            </div>
        </form>
    );
}



